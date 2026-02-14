#!/bin/sh

git config --global --add safe.directory "${PWD}"

npm install
npm run start
