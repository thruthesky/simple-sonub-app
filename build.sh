#!/bin/bash

ts-node patch-environment.ts $1 && ts-node patch-environment-prod.ts $1 && cp -f build-data/icons/${1}.png resources/icon.png && cp -f build-data/splashes/${1}.png resources/splash.png && ionic cordova resources android

ionic cordova build android --prod --release

cat build-data/keystores/evieco.password | jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore build-data/keystores/${1}.keystore  platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk $1

rm -f apk/${1}.apk && zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk apk/${1}.apk && adb uninstall com.sonub.${1}

adb install apk/${1}.apk && adb shell am start -n com.sonub.${1}/com.sonub.${1}.MainActivity
