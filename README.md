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
    * title image should be square and  be minimum of 520 pixels of width & height.
    * should be dark on the top of the title image since the title text is white.
  * person image - by adding image at `/src/assets/apps/[app-name]/contact-person-image.jpg`
    * person image should be square and  be minimum of 128 pixels of width & height.
  * texts - by setting in environemnt.

### Side Menu customisation

```` ts
sideMenus: [
    {
        title: {
            en: 'Lasema Spa Web Site', // You can input your own translation for menu.
            ko: '라세마 찜질방 홈페이지', // You can input your own translation for menu.
        },
        icon: 'home',
        url: 'https://evieco.shop',
        openWindow: true
    },
    {
        title: {
            en: 'Lasema Facebook', // You can input your own translation for menu.
            ko: '라세마 페이스북', // You can input your own translation for menu.
        },
    }
    // ...
];
````

## Serve & Run

* You can run by configuration

```` sh
ionic s --configuration=lasema
````

* Each app must have its own branch.
* Each app must have its own dev environment.
* Each app must have its own run script in `package.json`.
  * When it serves, do `npm run APP_NAME` to serve. And It must copy its dev env to `environment.ts`
  * For Cordova serve, do `npm run APP_NAME:android:serve` and it will copy dev env to `environment.ts`
  
* To build,
  * run`npm run APP_NAME:android:build` which will
    * copy its prod env to `environment.prod.ts`
      * with `production: true`
      * without `zone-error`
    * build the app with production env.
