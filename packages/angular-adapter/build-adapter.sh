#!/usr/bin/env sh

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

[ -s "$NVM_DIR/nvm.sh" > /dev/null ] && . "$NVM_DIR/nvm.sh" > /dev/null

node generate-adapter.js
echo Generated new adapter files, they need to be commited!
nvm use .
npx ng build
nvm use

cd ../../