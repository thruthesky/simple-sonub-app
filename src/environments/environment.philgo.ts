


import { Environment } from 'src/app/services/interfaces';
import { basicTexts } from 'src/app/locales/basic';


const texts = basicTexts;
const phone = '0917-467-8693';
const siteUrlEn = 'https://www.philgo.com';
const siteUrlEnShort = 'www.philgo.com';
const siteUrlKo = 'https://www.philgo.com';
const siteUrlKoShort = 'www.philgo.com';
const facebookUrl = 'https://web.facebook.com/thruthesky';

basicTexts.home.ko = '필고홈';
basicTexts['freetalk'] = { ko: '자유토론', en: 'Discussion' };





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
  domain: 'philgo',
  configXml: {
    "id": "com.sonub.philgo",
    "version": "0.0.8",
    "name": { "en": "Philgo", "ko": "필고", "ch": "Philgo", "jp": "Philgo" },
    "description": "This is Philgo App"
  },
  header: {
    home: false,
    register: true
  },
  /**
   * Which pages to show.
   * it change be 'home', 'gallery', 'forum', 'contact', 'map'
   * @note it cannot be set inside site settings since this is used before which site should be used.
   */
  firstPageRoute: 'home',
  /** */

  /**
   * Site settings.
   * @see README
   */
  sites: {
    en: {
      idx: '29',
      name: 'Philgo',
      url: siteUrlEn,
      home: {
      },
      contact: {
        title: 'No. 1 Korean Community',
        name: 'Philgo',
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
          title: basicTexts.home,
          icon: 'home',
          url: '/home'
        },
        {
          title: basicTexts['freetalk'],
          icon: 'photos',
          url: '/gallery',
          type: 'philgo',
          post_id: 'freetalk',
          category: ''
        },
        {
          title: { ko: '질문답변', en: 'QnA' },
          icon: 'chatboxes',
          url: '/forum',
          type: 'sonub',
          idx_category: '96',
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
          openSideMenu: true // open side menu
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
      idx: '29',
      name: '메일 앱 - 개발 화면',
      url: siteUrlKo,
      home: {
      },
      contact: {
        title: 'Web Developer',
        name: 'Juana Leichelle',
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
          post_id: 'trash',
          category: ''
        },
        {
          title: texts['forum'],
          icon: 'chatboxes',
          url: '/forum',
          type: 'sonub',
          idx_category: '96',
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
          openSideMenu: true // open side menu
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
          url: '/register',
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
      name: '主应用程序 - 开发人员应用',
      url: siteUrlEn,
      home: {
      },
      contact: {
        title: 'Web开发人员',
        name: 'Juana Leichelle',
        contacts: [
          {
            label: '电话号码',
            text: phone,
            click_url: 'tel:' + phone
          },
          {
            label: texts['website'].ch,
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
          type: 'philgo',
          post_id: 'company_info',
          category: '21'
        },
        {
          title: texts['forum'],
          icon: 'chatboxes',
          url: '/forum',
          type: 'sonub',
          idx_category: '57',
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
          openSideMenu: true // open side menu
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
      name: 'メインアプリ - 開発者アプリ',
      url: siteUrlEn,
      home: {
      },
      contact: {
        title: 'ウェブ開発者',
        name: 'Juana Leichelle',
        contacts: [
          {
            label: '電話番号',
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
          type: 'philgo',
          post_id: 'company_info',
          category: '21'
        },
        {
          title: texts['forum'],
          icon: 'chatboxes',
          url: '/forum',
          type: 'sonub',
          idx_category: '57',
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
          openSideMenu: true // open side menu
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
import 'zone.js/dist/zone-error';  // Included with Angular CLI.import { AppSettings } from 'src/app/services/app.settings';

