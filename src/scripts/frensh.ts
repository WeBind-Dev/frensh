// Shared client behaviour for the three proposals: live open/closed status + FR/EN toggle.
export const OPEN = 9 * 60;
export const CLOSE = 22 * 60 + 30;

/** Current minutes since midnight in Cannes (Europe/Paris), whatever the visitor's timezone. */
export function parisMinutes(d = new Date()): number {
  const parts = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(d);
  const h = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);
  const m = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);
  return h * 60 + m;
}

export const fmt = (min: number) => `${String(Math.floor(min / 60) % 24).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;

export function isOpen(min = parisMinutes()) { return min >= OPEN && min < CLOSE; }

const lang = () => (document.documentElement.dataset.lang === 'en' ? 'en' : 'fr');

function statusText(min: number) {
  const open = isOpen(min);
  const en = lang() === 'en';
  if (open) {
    const left = CLOSE - min;
    if (left <= 45) return { open, text: en ? `Open · last call, closes 10:30 pm` : `Ouvert · on ferme à 22h30` };
    return { open, text: en ? `Open now · until 10:30 pm` : `Ouvert · jusqu’à 22h30` };
  }
  return { open, text: en ? `Closed · opens at 9 am` : `Fermé · on ouvre à 9h` };
}

/** Fills every [data-status] element; sets data-open="true|false" for styling. */
export function initStatus() {
  const run = () => {
    const min = parisMinutes();
    const s = statusText(min);
    document.querySelectorAll<HTMLElement>('[data-status]').forEach((el) => {
      el.dataset.open = String(s.open);
      const t = el.querySelector<HTMLElement>('[data-status-text]') ?? el;
      t.textContent = s.text;
    });
    document.querySelectorAll<HTMLElement>('[data-clock]').forEach((el) => (el.textContent = fmt(min)));
    document.documentElement.dataset.open = String(s.open);
  };
  run();
  setInterval(run, 30_000);
  document.addEventListener('frensh:lang', run);
}

export function initLang() {
  document.querySelectorAll<HTMLButtonElement>('[data-lang-toggle]').forEach((btn) => {
    const sync = () => {
      btn.setAttribute('aria-label', lang() === 'fr' ? 'Switch to English' : 'Passer en français');
      btn.textContent = lang() === 'fr' ? 'EN' : 'FR';
    };
    sync();
    btn.addEventListener('click', () => {
      const next = lang() === 'fr' ? 'en' : 'fr';
      document.documentElement.dataset.lang = next;
      document.documentElement.lang = next;
      try { localStorage.setItem('frensh-lang', next); } catch {}
      document.querySelectorAll<HTMLButtonElement>('[data-lang-toggle]').forEach((b) => (b.textContent = next === 'fr' ? 'EN' : 'FR'));
      document.dispatchEvent(new CustomEvent('frensh:lang', { detail: next }));
    });
  });
}
