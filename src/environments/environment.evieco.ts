// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import { Environment } from 'src/app/services/interfaces';


import { basicTexts } from 'src/app/locales/basic';
const texts = basicTexts;


const phone = '0956-871-2485';
const siteUrlEn = 'https://en.evieco.shop';
const siteUrlEnShort = 'en.evieco.shop';
const siteUrlKo = 'https://www.evieco.shop';
const siteUrlKoShort = 'www.evieco.shop';
const facebookUrl = 'https://web.facebook.com/thruthesky';


export const environment: Environment = {
  production: false,
  simplest: {
    backendUrl: 'https://api.sonub.com/api.php',
    enableLoginToAllSubdomains: false
  },
  philgo: {
    url: {
      // webServer: 'https://local.philgo.com/api.php', // local server
      // fileServer: 'https://local.philgo.com/api.php' // local server

      webServer: 'https://philgo.com/api.php', // remote server
      fileServer: 'https://file.philgo.com/api.php' // remote server
    }
  },

  domain: 'evieco',
  configXml: {
    "id": "com.sonub.evieco",
    "version": "0.0.9",
    "name": { "en": "Evie Co", "ko": "에비코 반영구화장", "ch": "Evie Co", "jp": "Evie Co" },
    "description": "Evie Co App"
  },
  firstPageRoute: 'home',

  header: {
    home: false,
    map: true
  },

  /**
   * Site settings.
   * @see README
   */
  sites: {
    en: {
      idx: '82',
      name: 'Evie & Co Microblading',
      url: siteUrlEn,
      home: {
        title: 'Evie & Co - Best Permanent Eyebrows Makeup Service'
      },
      contact: {
        title: 'Permanent Eyebrows Makeup',
        name: 'Evie & Co',
        contacts: [
          {
            label: texts['phone number'].en,
            text: phone,
            click_url: 'tel:' + phone
          },
          {
            label: texts['website'].en,
            text: siteUrlEnShort,
            click_url: siteUrlEn
          }
        ]
      },
      footerMenus: [
        {
          title: texts['home'],
          icon: 'home',
          url: '/home'
        },
        {
          title: texts['gallery'],
          icon: 'photos',
          url: '/gallery',
          type: 'sonub',
          idx_category: '62'
        },
        // {
        //     title: texts['forum'],
        //     icon: 'chatboxes',
        //     url: '/forum'
        // },
        {
          title: texts['contact'],
          icon: 'contact',
          url: '/contact'
        },
        {
          title: texts['map'],
          icon: 'map',
          url: '/map'
        },
        {
          title: texts['menu'],
          icon: 'menu',
          openSideMenu: true
        }
      ],
      sideMenus: [
        {
          title: texts['website'].en,
          icon: 'home',
          url: siteUrlEn,
          openWindow: true // open the url in new window
        },
        {
          title: texts['facebook'],
          icon: 'logo-facebook',
          url: facebookUrl,
          openWindow: true
        },
        {
          title: texts['setting'],
          icon: 'settings',
          url: '/setting',
        },
        {
          title: texts['close'],
          icon: 'close',
          close: true // close side menu
        }
      ],
    },
    ko: {
      name: 'Evie & Co 반영구 화장',
      idx: '21',
      url: siteUrlKo,
      home: {
        title: 'Evie & Co (에비코) - 반영구 눈썹 화장'
      },
      contact: {
        title: '한국식 반영구 눈 화장',
        name: 'Evie & Co',
        contacts: [
          {
            label: '필리핀 전화',
            text: phone,
            click_url: 'tel:' + phone
          },
          {
            label: '홈페이지',
            text: siteUrlKoShort,
            click_url: siteUrlKo
          }
        ]
      },
      footerMenus: [
        {
          title: texts['home'],
          icon: 'home',
          url: '/home'
        },
        {
          title: texts['gallery'],
          icon: 'photos',
          url: '/gallery',
          type: 'philgo',
          post_id: 'company_info',
          category: '21'
        },
        // {
        //     title: texts['forum'],
        //     icon: 'chatboxes',
        //     url: '/forum'
        // },
        {
          title: texts['contact'],
          icon: 'contact',
          url: '/contact'
        },
        {
          title: texts['map'],
          icon: 'map',
          url: '/map'
        },
        {
          title: texts['menu'],
          icon: 'menu',
          openSideMenu: true
        }
      ],
      sideMenus: [
        {
          title: texts['website'],
          icon: 'home',
          url: siteUrlKo,
          openWindow: true // open the url in new window
        },
        {
          title: texts['facebook'],
          icon: 'logo-facebook',
          url: facebookUrl,
          openWindow: true
        },
        {
          title: texts['setting'],
          icon: 'settings',
          url: '/setting',
        },
        {
          title: texts['close'],
          icon: 'close',
          close: true // close side menu
        }
      ],
    },
    ch: {
      idx: '82',
      name: 'Evie & Co Microblading',
      url: siteUrlEn,
      home: {
        title: 'Evie & Co - Best Permanent Eyebrows Makeup Service'
      },
      contact: {
        title: 'Permanent Eyebrows Makeup',
        name: 'Evie & Co',
        contacts: [
          {
            label: texts['phone number'].en,
            text: phone,
            click_url: 'tel:' + phone
          },
          {
            label: texts['website'].en,
            text: siteUrlEnShort,
            click_url: siteUrlEn
          }
        ]
      },
      footerMenus: [
        {
          title: texts['home'],
          icon: 'home',
          url: '/home'
        },
        {
          title: texts['gallery'],
          icon: 'photos',
          url: '/gallery',
          type: 'sonub',
          idx_category: '62'
        },
        // {
        //     title: texts['forum'],
        //     icon: 'chatboxes',
        //     url: '/forum'
        // },
        {
          title: texts['contact'],
          icon: 'contact',
          url: '/contact'
        },
        {
          title: texts['map'],
          icon: 'map',
          url: '/map'
        },
        {
          title: texts['menu'],
          icon: 'menu',
          openSideMenu: true
        }
      ],
      sideMenus: [
        {
          title: texts['website'],
          icon: 'home',
          url: siteUrlEn,
          openWindow: true // open the url in new window
        },
        {
          title: texts['facebook'],
          icon: 'logo-facebook',
          url: facebookUrl,
          openWindow: true
        },
        {
          title: texts['setting'],
          icon: 'settings',
          url: '/setting',
        },
        {
          title: texts['close'],
          icon: 'close',
          close: true // close side menu
        }
      ],
    },
    jp: {
      idx: '82',
      name: 'Evie & Co Microblading',
      url: siteUrlEn,
      home: {
        title: 'Evie & Co - Best Permanent Eyebrows Makeup Service'
      },
      contact: {
        title: 'Permanent Eyebrows Makeup',
        name: 'Evie & Co',
        contacts: [
          {
            label: texts['phone number'].jp,
            text: phone,
            click_url: 'tel:' + phone
          },
          {
            label: texts['website'].jp,
            text: siteUrlEnShort,
            click_url: siteUrlEn
          }
        ]
      },
      footerMenus: [
        {
          title: texts['home'],
          icon: 'home',
          url: '/home'
        },
        {
          title: texts['gallery'],
          icon: 'photos',
          url: '/gallery',
          type: 'sonub',
          idx_category: '62'
        },
        // {
        //     title: texts['forum'],
        //     icon: 'chatboxes',
        //     url: '/forum'
        // },
        {
          title: texts['contact'],
          icon: 'contact',
          url: '/contact'
        },
        {
          title: texts['map'],
          icon: 'map',
          url: '/map'
        },
        {
          title: texts['menu'],
          icon: 'menu',
          openSideMenu: true
        }
      ],
      sideMenus: [
        {
          title: texts['website'],
          icon: 'home',
          url: siteUrlEn,
          openWindow: true // open the url in new window
        },
        {
          title: texts['facebook'],
          icon: 'logo-facebook',
          url: facebookUrl,
          openWindow: true
        },
        {
          title: texts['setting'],
          icon: 'settings',
          url: '/setting',
        },
        {
          title: texts['close'],
          icon: 'close',
          close: true // close side menu
        }
      ],
    },
  },

  /**
  * Phone number to be appear on map.
  */
  map: {
    phone: phone,
    lat: 14.5894,
    lng: 120.981,
    title: {
      en: 'Evie & Co Microblading!',
      ko: 'Even & Co 반영구화장'
    },
    snippet: {
      en: 'Please click [Get Directions] button to get here.\nTel: ' + phone,
      ko: 'Evie & Co 를 방문하시려면 길찾기를 클릭해주세요.\n전화: ' + phone,
      ch: '请点击[获取路线]按钮进入此处.\nTel: ' + phone,
      jp: 'ここへ行くには[道順を取得]ボタンをクリックしてください。.\nTel: ' + phone
    },
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';
