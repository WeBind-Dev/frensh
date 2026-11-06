#!/usr/bin/env bash
# Déploie le site Frensh sur o2switch (https://frensh-cannes.fr).
# Build statique à la racine du domaine, puis copie de dist/ vers ~/frensh-cannes.fr (document root du domaine).
# Usage : ./deploy/deploy-o2switch.sh
set -euo pipefail
cd "$(dirname "$0")/.."

HOST="o2switch"                      # alias défini dans ~/.ssh/config (compte qaku4843)
REMOTE_DIR="frensh-cannes.fr"        # document root créé par cPanel (relatif au home distant)

echo "→ Build (site : https://frensh-cannes.fr)"
unset BASE_PATH
SITE_URL="https://frensh-cannes.fr" npx astro build

echo "→ Envoi vers $HOST:~/$REMOTE_DIR"
rsync -az --delete --exclude '.well-known/' --exclude 'cgi-bin/' dist/ "$HOST:$REMOTE_DIR/"

echo "✓ Déployé. Vérifie : https://frensh-cannes.fr/"
