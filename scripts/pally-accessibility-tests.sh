#!/bin/bash
trap 'kill $(jobs -p)' SIGINT SIGTERM EXIT
yarn sb:build && npx sb extract &&
yarn start-storybook -p 6007 --ci &
npx wait-on http://localhost:6007 -t 120000 && node ./pally-accessibility-tests.js
