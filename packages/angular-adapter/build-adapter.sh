#!/usr/bin/env sh

[ -s "$NVM_DIR/nvm.sh" > /dev/null ] && . "$NVM_DIR/nvm.sh" > /dev/null

echo ===Generating adapter files===

node generate-adapter.js

nvm use .
npx ng build
nvm use
