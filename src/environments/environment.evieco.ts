// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import { Environment } from 'src/app/services/interfaces';
import { basicTexts } from 'src/app/locales/basic';
const texts = basicTexts;

// texts.gallery.en = 'Evie & Co - Gallery';
// texts.gallery.ko = 'Evie & Co 갤러리';


const phone = '0956-871-2485';
const siteUrlEn = 'https://en.evieco.shop';
const siteUrlEnShort = 'en.evieco.shop';
const siteUrlKo = 'https://www.evieco.shop';
const siteUrlKoShort = 'www.evieco.shop';
const facebookUrl = 'https://www.facebook.com/Thankyoumadam';

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
    "name": { "en": "Evie &amp; Co", "ko": "에비코 반영구화장", "ch": "Evie &amp; Co", "jp": "Evie &amp; Co" },
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
      idx: '24',
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
          pageTitle: 'Evie & Co - Gallery',
          icon: 'photos',
          url: '/gallery',
          type: 'sonub',
          idx_category: '82'
        },
        {
          title: texts['contact'],
          pageTitle: 'Evie & Co - Contacts',
          icon: 'contact',
          url: '/contact'
        },
        {
          title: texts['map'],
          pageTitle: 'How to get Evie&Co',
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
          when: 'logout',
          title: texts['login'],
          icon: 'log-in',
          url: '/login',
        },
        {
          when: 'logout',
          title: texts['register'],
          icon: 'person-add',
          url: '/register'
        },
        {
          when: 'login',
          title: texts['profile'],
          icon: 'contact',
          url: '/profile'
        },
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
          when: 'login',
          title: texts['logout'],
          icon: 'log-out',
          url: '/logout',
        },
        {
          title: texts['close'],
          icon: 'close',
          close: true // close side menu
        }
      ],
    },
    ko: {
      idx: '21',
      name: 'Evie & Co 반영구 화장',
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
          pageTitle: 'Evie & Co 갤러리',
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
          pageTitle: 'Evie & Co 연락처',
          icon: 'contact',
          url: '/contact'
        },
        {
          title: texts['map'],
          pageTitle: 'Evie & Co 찾아가는 길',
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
          when: 'logout',
          title: texts['login'],
          icon: 'log-in',
          url: '/login',
        },
        {
          when: 'logout',
          title: texts['register'],
          icon: 'person-add',
          url: '/register'
        },
        {
          when: 'login',
          title: texts['profile'],
          icon: 'contact',
          url: '/profile'
        },
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
          when: 'login',
          title: texts['logout'],
          icon: 'log-out',
          url: '/logout',
        },
        {
          title: texts['close'],
          icon: 'close',
          close: true // close side menu
        }
      ],
    },
    ch: {
      idx: '24',
      name: 'Evie & Co 永久眉毛化妆',
      url: siteUrlEn,
      home: {
        title: 'Evie & Co - 最好的永久眉毛化妆服务'
      },
      contact: {
        title: '永久眉毛化妆',
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
          idx_category: '82'
        },
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
          when: 'logout',
          title: texts['login'],
          icon: 'log-in',
          url: '/login',
        },
        {
          when: 'logout',
          title: texts['register'],
          icon: 'person-add',
          url: '/register'
        },
        {
          when: 'login',
          title: texts['profile'],
          icon: 'contact',
          url: '/profile'
        },
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
          when: 'login',
          title: texts['logout'],
          icon: 'log-out',
          url: '/logout',
        },
        {
          title: texts['close'],
          icon: 'close',
          close: true // close side menu
        }
      ],
    },
    jp: {
      idx: '24',
      name: 'Evie & Co マイクロブレード',
      url: siteUrlEn,
      home: {
        title: 'Evie & Co - 最高の永久眉毛メイクサービス'
      },
      contact: {
        title: '永久眉メイク',
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
          idx_category: '82'
        },
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
          when: 'logout',
          title: texts['login'],
          icon: 'log-in',
          url: '/login',
        },
        {
          when: 'logout',
          title: texts['register'],
          icon: 'person-add',
          url: '/register'
        },
        {
          when: 'login',
          title: texts['profile'],
          icon: 'contact',
          url: '/profile'
        },
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
          when: 'login',
          title: texts['logout'],
          icon: 'log-out',
          url: '/logout',
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
      ko: 'Even & Co 반영구화장',
      ch: 'Evie & Co 永久眉毛化妆',
      jp: 'Evie & Co マイクロブレード'
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
