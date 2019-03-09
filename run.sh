#!/bin/sh

ts-node patch-config-xml.ts $1 && cp -f build-data/icons/${1}.png resources/icon.png && cp -f build-data/splashes/${1}.png resources/splash.png && ionic cordova resources android && adb uninstall com.sonub.${1} && ionic cordova run android -l --configuration=$1
