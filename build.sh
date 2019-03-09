#!/bin/bash

ts-node patch-config-xml.ts $1 && ts-node patch-prod-keystore.ts $1 && cp -f build-data/icons/${1}.png resources/icon.png && cp -f build-data/splashes/${1}.png resources/splash.png && ionic cordova resources android  && ionic cordova build android --prod --release --configuration=$1 --buildConfig build-data/buildJsons/build-${1}.json && rm -f ${1}.apk && zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release.apk apk/${1}.apk && adb uninstall com.sonub.${1}

adb install apk/${1}.apk && adb shell am start -n com.sonub.${1}/com.sonub.${1}.MainActivity
