startTime=`date +%s`

time rm -rf dist/

time npm run build-client & npm run build-server & npm run start
