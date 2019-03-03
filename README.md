# simple-sonub-app

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

### App Settings

#### Menu

* There are 5 menus only. You can hide some of the menus but don't try to add more.
  It must be simple to easy develop & maintain.

* There are two forum menus.
  * one is `gallery` for photo listing from a forum.
  * the other is `forum` for free discussion.
  * Try to hide `forum` menu to make it simple.

#### Multi languages & Sites

* It supports 4 languages.
  * English, Korean, Chinese, Japanese.
  * Languages could be optionally remove by the settings.
  * Since we do not have man power of Chinese and Japanese, try to support Korean & English.

* You can sites in its `environemnt.xxxx.ts`.
  * Each langauge must have its own site.
    * If you add only one lagnuage, then the language will be the default.
  * `idx` is the site idx.
  * `name` is the name of the app.
  * `gallery` is a forum category (menu) idx of the site.
  * `fourm` is a forum category (menu) idx of the site.
    * `gallery` and `forum` could be sonub forum or philgo forum.

Example of site settings )

```` ts
sites: {
    en: {
        idx: '82',
        name: 'Evie & Co Microblading',
        gallery: {
            type: 'sonub',
            idx_category: '62'
        },
        forum: { ... }
    },
    ko: {
        name: 'Evie & Co 반영구 화장',
        idx: '21',
        gallery: {
            type: 'philgo',
            post_id: 'company_info',
            category: '21'
        },
        forum: { ... }
    },
    ch: { ... },
    jp: { ... }
},
````

### Site Settings

* Each site should have a fourm to connect to menu.

### Multilingual

* If a site has many languages, it can have many domains per each languages like
  * ko.domain.com
  * en.domain.com
  * jp.domain.com
  * ch.domain.com

* You can those domains in `settings.sites`.
* The language selection in `settings page` is based on `settings.sites`.
  * If it has only one language, then it does not show language selection option.
  * If it has many language site, then it shows those langauge to select.

* If there is only one language site is set on the `settigns.sites`,
  then it only use that lanage.
  Users will not have option to choose other language.

## Run

* You can run by configuration

```` sh
ionic s --configuration=lasema
````

## Publish

* Each app must have its own branch.
* Each app must have its own dev environment & prod environment.
* Each app must have its own run script in `package.json`.
  * For github push, `npm run APP_NAME:push` which will first copy its prod environment to `environment.prod.ts` and push it to git hub.
  * For Cordova build, `npm run APP_NAME:build` which will first copy its prod env to `environment.prod.ts` and build the app with production env.
