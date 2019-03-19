# simple-sonub-app

## Important

@see [App Dev Must Do](https://docs.google.com/document/d/1BlLGC2bJr9VRFfItVxNgHiAWfuY-Ao15y9kt_ZeBsaw/edit#heading=h.9gbothfz8qtx) before releasing.

## Reference

### User Manual

We may need to give the user manual to our clients. So we have [Sonub App User Manual](https://docs.google.com/document/d/1xvo8G5Gevk9DnIbbgYImge_s6c_5kXZp1yD9BY9rl5g/edit?usp=sharing)

## Developers Build Guideline

### Configuration

* First(front/home) page shoud be static. So, even though there is no internet, the app can show something.

* Bootsrap v4 (except Bootstrap Javascript) is installed.
  You can use the whole bootstrap component But the component works with Bootstrap Javascript will not work.

### Warning

* Some data property must in a specific format.
  * The value of `environemnt.configXml.name` must be complete JSON format or there will be an error.
  * Closure of `configXml:` which is `},` must be on a single line and content of `configXml` must not have `},` on a single line.

```` ts
  configXml: {
    "id": "com.sonub.work",
    "version": "0.0.8",
    "name": {"en": "Work App", "ko": "작업 앱", "ch": "工作应用", "jp": "仕事用アプリ" }, // }, must not be on a single line here.
    "description": "This is Description for Work App"
  }, // <<== closing of configXml must be on a single line.
````

* Language code is different from standard.
  * `zh-***` are `ch` in the app.
  * `ja` is `jp` in the app.

## Posts

* Each gallery must be written in simple HTTP Query format

@see [Simple Http Query Format](https://docs.google.com/document/d/1nOEJVDilLbF0sNCkkRGcDwdT3rDLZp3h59oQ77BIdp4/edit#heading=h.3pfuj3qawphf)

## Displaying Gallery

* Site admin need to create posts with access code like `gallery-[n]-[domain]`.
  * access code must be unique.
* Follow [Simple Http Query Format](https://docs.google.com/document/d/1nOEJVDilLbF0sNCkkRGcDwdT3rDLZp3h59oQ77BIdp4/edit#heading=h.3pfuj3qawphf) to write text in English, CJK.
* It can be be up to 10 posts.
* Site admin may hide the category from menu.

## Settings

### Environments

* The default & development & test environment is `environment.work.ts`. Not `environmnt.ts`.
  So, when you need to improve or develop new feature you should work on `environment.work.ts`.

#### Domain

* You can set `domain` in environment which is not the Internet Domain.
  It is a domain to distinguish each app.

#### Menus

* There are 6 menus only. You can hide some of the menus but don't try to add more. It will look urgly due to lack of space on app device with.
  * It must be simple to develop & maintain. So, keep it simple.
  * To hide menus, simple omit menus inside the environemnt.

* 'home' page is for showing a customized front page.
  * Do not put any dynamic content from server. So it can show content even if it's offline.

* There are two forum menus.
  * one is `gallery` for photo listing from a forum.
  * the other is `forum` for free discussion.
  * Try to hide `forum` menu to make it simple.

#### First page

* You can set first page at `firstPageRoute`.
    You can put 'home' or 'gallery' or etc...

#### Header

* Try to hide header since there are menus at bottom.

#### Multi languages & Sites

* It supports 4 languages by default.
  * English, Korean, Chinese, Japanese.
  * Languages could be optionally remove by the settings.
  * Since we do not have man power of Chinese and Japanese, try to support Korean & English.
  * If you want to support Chinese & Japanese there might be two way.
    * If you have manpower for Chinese & Japanese, then do it by Creating the language sites and customizing all the content.
    * If you don't have man power, Use English site for Chinese & Japanese.
      So, English fourms(gallery & discussion) will be shared to Chinese & Japanese settings.
      It's like that you do not actually create sites for Chinese & Japanese.
      You only support Chinese & Japanese for menus and static pages.

* You can add many sites in its `environemnt.xxxx.ts`.
  * For instance, you can add 'en', 'ko', 'ch', 'jp' sites to the environemnt.
  * Each langauge must have its own site settings.
    * If you add only one lagnuage, then the language will be the site language by default. User cannot change language.
  * `idx` is the site idx.
  * `name` is the name of the app.
  * `gallery` is a forum category (menu) idx of the site.
  * `fourm` is a forum category (menu) idx of the site.
    * `gallery` and `forum` could be sonub forum or philgo forum.

  * Example of site settings: @see `environment.work.ts`

##### Mutilanguage on App name

* App name below the app icon will be displayed as set in `xmlConfig` settings.
* This is done by [cordova-plugin-localization-strings](https://github.com/kelvinhokk/cordova-plugin-localization-strings)

### Site Settings

* Each site should have a fourm to connect to menu.

## Customisation

* Follow this instruction to do customisation.

### Phone Number, Site, Facebook, etc

* Input proper phone numbers, site, facebook on environment.

### Page customisation

* Header of each page could be removed by setting `false` to `header: { ...: ... }` in environment.

* Consider to remove header toolbar for front page.
  * Front page is a customised by each domain.

#### Home page customisation

* If you want to show home page ( you can omit it by setting menu on app settings )
  * You must create a component under `src/pages/home/[domain]/home.component.xxx`.
* If you want you can hide the header by setting `header: { home: false }` in environment which is true by default.

### Contact page customisation

* You can change
  * title image - by adding image at `/src/assets/apps/[app-name]/contact-title-image.jpg`
    * The best fit of title image is 500x500 pixels. It is best fit when it is squre. If it is rectangle, you may have to adjust the text position.
    * should be dark on the top of the title image since the title text is white.
  * person image - by adding image at `/src/assets/apps/[app-name]/contact-person-image.jpg`
    * person image should be also square and  be minimum of 128 pixels of width & height.
  * texts - by setting in environemnt.

### Menu customisation

* There are 6 menus by default.
  * You can customize all the menu except `menu` menu.
  * You can change home, contact, map to other forum menus like 'greetings', 'discussion', 'qna', 'buyandsell'. It totally upto you.
  * For instance, you want to make a Philgo Travel App,
    You can remove all menu except `home`, `menu`.
    And add your own forums for other menus like '추천여행지', '여행준비', '게시판'

  * You can also add more forum menus on side menus if you want.

### Side Menu customisation

* Each language has its own side menu settings.

#### side menu when

* `when` tells when to show the menu.
  * if it is `login`, then the menu will be shown if the user logged in.
  * if it is `logout`, then the menu will be shown if the user logged out.
  * @see `environment.ts` for the sample of complete settigns.

## Serve & Run & Build

* You can run by configuration

```` sh
ionic s --configuration=work        ; ionic serve with `environment.work.ts`
ionic s --configuration=evieco      ; ionic serve with `environemnt.evieco.ts`
ionic s --configuration=lasema      ; ionic serve with `environemnt.lasema.ts`

npm run cordova:run:work            ; cordova run with `environemnt.work.ts`
npm run cordova:run:evieco          ; cordova run with `environemnt.evieco.ts`
npm run cordova:run:lasema          ; cordova run with `environemnt.lasema.ts`

npm run cordova:build:work            ; cordova build realease APK with `environemnt.work.ts`
npm run cordova:build:evieco          ; cordova build realease APK with `environemnt.evieco.ts`
npm run cordova:build:lasema          ; cordova build realease APK with `environemnt.lasema.ts`

````

* Each app must have its own environment.
* Each app must have its keystore like in `build-data/keystores/[name].keysotre`.
  * And the password of the keystore must be saved like in `build/data/keystores/[name].password`.
* To build,
  * Each app needs an icon in `build-data/icons/{domain}.png`
  * Each app needs a splash in `build-data/splashes/{domain}.png`

## Utilities

### patch.ts

* It patches the `config.xml` to build android app with `environment`.

```` sh
ts-node patch.ts            ; this will patch `config.xml` with `environment.ts`
ts-node patch.ts evieco     ; this will patch `config.xml` with `environment.evieco.ts`
ts-node patch.ts lasema     ; this will patch `config.xml` with `environment.lasema.ts`
````

## App Signing

https://stackoverflow.com/questions/26449512/how-to-create-a-signed-apk-file-using-cordova-command-line-interface

## App Keystores

### default

keystore file: default.keystore
alias: default
password: asdf99

## Checklist for publish to App Store

### App information

* Check if below are set properly and works fine.
  * Name of the app in all langauges
  * Write names
  * Phone numbers.
  * Contact page settings
  * Map & navigation

### Language Supports

* What languages the app must support.

#### Page

* Does front page looks fine?
* Does gallery or forum look fine?
* Does menu look fine? with all languages?
  * Toolbar menu title(name) looks fine?
* Does sidebar menu looks fine?
  * The title of sidebar looks fine?
  * App has website, facebook on the sidebar menu?

### Functions

* Does the app needs login/logout?

## Coding Guideline

### How to create a new app

* Copy `environment.work.ts` to new environment of the app.
* Update `angular.json` for web & cordova.
* Change the content of new environment
* Run the app like `ionic s --configuration=xxxx`

### site.idx

* When a post is created in sonub.com forum, it must have `site.idx` to tell which site the post will belong to.
  * This may not be used if the site only has philgo forums.
