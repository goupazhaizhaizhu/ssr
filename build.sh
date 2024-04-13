#!/bin/bash
set -ex

startTime=`date +%s`

time rm -rf node_modules/

time npm cache clear --force


time npm install

time npm run start