// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from 'src/app/services/interfaces';
import { basicTexts } from 'src/app/locales/basic';

const texts = basicTexts;
const phone = '0956-871-2485';
const siteUrlEn = 'https://www.lasema.shop';
const siteUrlEnShort = 'www.lasema.shop';
const siteUrlKo = 'https://www.lasema.shop';
const siteUrlKoShort = 'www.lasema.shop';
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

  domain: "lasema",

  configXml: {
    id: 'com.sonub.lasema',
    version: '0.0.8',
    name: {"en": "Lasema", ko: '라세마', "ch": "Lasema", "jp": "Lasema" },
    description: 'Lasema App'
  },
  firstPageRoute: 'home',
  header: {
    home: false
  },
  /**
   * Site settings.
   * @see README
   */
  sites: {
    en: {
      idx: '24',
      name: 'Lasema Spa & Jimjilbang',
      url: siteUrlEn,
      home: {
        title: 'Lasema Spa & JimJilBang'
      },
      contact: {
        title: 'Lasema Spa & JimJilBang',
        name: 'Makati',
        contacts: [
          {
            label: 'Phone Number',
            text: phone,
            click_url: 'tel:' + phone
          },
          {
            label: 'Website',
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
    ko: {
      idx: '21',
      name: '라세마 스파 & 찜질방',
      url: siteUrlEn,
      home: {
        title: '라세마 스파 & 찜질방'
      },
      contact: {
        title: '라세마 스파 & 찜질방',
        name: '마카티',
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
    }
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

