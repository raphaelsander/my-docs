#!/bin/sh

git config --global --add safe.directory "${PWD}"

yarn
yarn start
