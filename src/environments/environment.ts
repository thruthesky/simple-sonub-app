import { Environment } from 'src/app/services/interfaces';

// // This file can be replaced during build by using the `fileReplacements` array.
// // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// // The list of file replacements can be found in `angular.json`.

// import { Environment } from 'src/app/services/interfaces';
// import { basicTexts } from 'src/app/locales/basic';

export const environment: Environment = <any>{
  production: false
};


// const texts = basicTexts;
// const phone = '0956-871-2485';
// const siteUrlEn = 'https://en.evieco.shop';
// const siteUrlEnShort = 'en.evieco.shop';
// const siteUrlKo = 'https://www.evieco.shop';
// const siteUrlKoShort = 'www.evieco.shop';
// const facebookUrl = 'https://web.facebook.com/thruthesky';

// export const environment: Environment = {
//   production: false,
//   simplest: {
//     backendUrl: 'https://api.sonub.com/api.php',
//     enableLoginToAllSubdomains: false
//   },
//   philgo: {
//     url: {
//       // webServer: 'https://local.philgo.com/api.php', // local server
//       // fileServer: 'https://local.philgo.com/api.php' // local server

//       webServer: 'https://philgo.com/api.php', // remote server
//       fileServer: 'https://file.philgo.com/api.php' // remote server
//     }
//   },

//   domain: 'default',
//   configXml: {
//     id: 'com.sonub.app',
//     version: '0.0.2',
//     name: 'DefaultApp',
//     description: 'This is Description'
//   },
//   header: {
//     home: false,
//     register: true
//   },
//   /**
//    * Which pages to show.
//    * it change be 'home', 'gallery', 'forum', 'contact', 'map'
//    * @note it cannot be set inside site settings since this is used before which site should be used.
//    */
//   firstPageRoute: 'home',
//   /** */

//   /**
//    * Site settings.
//    * @see README
//    */
//   sites: {
//     en: {
//       idx: '24',
//       name: 'Main App - Developer App',
//       url: siteUrlEn,
//       home: {
//         title: 'Default English App'
//       },
//       contact: {
//         title: 'Web Developer',
//         name: 'Juana Leichelle',
//         contacts: [
//           {
//             label: 'Phone Number',
//             text: phone,
//             click_url: 'tel:' + phone
//           },
//           {
//             label: 'Website',
//             text: siteUrlEnShort,
//             click_url: siteUrlEn
//           }
//         ]
//       },
//       footerMenus: [
//         {
//           title: texts['home'],
//           icon: 'home',
//           url: '/home'
//         },
//         {
//           title: texts['gallery'],
//           icon: 'photos',
//           url: '/gallery',
//           type: 'philgo',
//           post_id: 'company_info',
//           category: '21'
//         },
//         {
//           title: texts['forum'],
//           icon: 'chatboxes',
//           url: '/forum',
//           type: 'sonub',
//           idx_category: '57',
//         },
//         {
//           title: texts['contact'],
//           icon: 'contact',
//           url: '/contact'
//         },
//         {
//           title: texts['map'],
//           icon: 'map',
//           url: '/map'
//         },
//         {
//           title: texts['menu'],
//           icon: 'menu',
//           openSideMenu: true // open side menu
//         }
//       ],
//       sideMenus: [
//         {
//           when: 'logout',
//           title: texts['login'],
//           icon: 'log-in',
//           url: '/login',
//         },
//         {
//           when: 'logout',
//           title: texts['register'],
//           icon: 'person-add',
//           url: '/register'
//         },
//         {
//           when: 'login',
//           title: texts['profile'],
//           icon: 'contact',
//           url: '/profile'
//         },
//         {
//           title: texts['website'],
//           icon: 'home',
//           url: siteUrlEn,
//           openWindow: true // open the url in new window
//         },
//         {
//           title: texts['facebook'],
//           icon: 'logo-facebook',
//           url: facebookUrl,
//           openWindow: true
//         },
//         {
//           title: texts['setting'],
//           icon: 'settings',
//           url: '/setting',
//         },
//         {
//           when: 'login',
//           title: texts['logout'],
//           icon: 'log-out',
//           url: '/logout',
//         },
//         {
//           title: texts['close'],
//           icon: 'close',
//           close: true // close side menu
//         }
//       ],
//     },
//     ko: {
//       idx: '21',
//       name: '메일 앱 - 개발 화면',
//       url: siteUrlKo,
//       home: {
//         title: '기본 한국어 앱 화면'
//       },
//       contact: {
//         title: 'Web Developer',
//         name: 'Juana Leichelle',
//         contacts: [
//           {
//             label: '필리핀 전화',
//             text: phone,
//             click_url: 'tel:' + phone
//           },
//           {
//             label: '홈페이지',
//             text: siteUrlKoShort,
//             click_url: siteUrlKo
//           }
//         ]
//       },
//       footerMenus: [
//         {
//           title: texts['home'],
//           icon: 'home',
//           url: '/home'
//         },
//         {
//           title: texts['gallery'],
//           icon: 'photos',
//           url: '/gallery',
//           type: 'philgo',
//           post_id: 'company_info',
//           category: '21'
//         },
//         {
//           title: texts['forum'],
//           icon: 'chatboxes',
//           url: '/forum',
//           type: 'sonub',
//           idx_category: '12',
//         },
//         {
//           title: texts['contact'],
//           icon: 'contact',
//           url: '/contact'
//         },
//         {
//           title: texts['map'],
//           icon: 'map',
//           url: '/map'
//         },
//         {
//           title: texts['menu'],
//           icon: 'menu',
//           openSideMenu: true // open side menu
//         }
//       ],
//       sideMenus: [
//         {
//           when: 'logout',
//           title: texts['login'],
//           icon: 'log-in',
//           url: '/login',
//         },
//         {
//           when: 'logout',
//           title: texts['register'],
//           icon: 'person-add',
//           url: '/register',
//         },
//         {
//           when: 'login',
//           title: texts['profile'],
//           icon: 'contact',
//           url: '/profile'
//         },
//         {
//           title: texts['website'],
//           icon: 'home',
//           url: siteUrlKo,
//           openWindow: true // open the url in new window
//         },
//         {
//           title: texts['facebook'],
//           icon: 'logo-facebook',
//           url: facebookUrl,
//           openWindow: true
//         },
//         {
//           title: texts['setting'],
//           icon: 'settings',
//           url: '/setting',
//         },
//         {
//           when: 'login',
//           title: texts['logout'],
//           icon: 'log-out',
//           url: '/logout',
//         },
//         {
//           title: texts['close'],
//           icon: 'close',
//           close: true // close side menu
//         }
//       ],
//     }
//   },

//   /**
//   * Phone number to be appear on map.
//   */
//   map: {
//     phone: phone,
//     lat: 14.5894,
//     lng: 120.981,
//     title: {
//       en: 'Evie & Co Microblading!',
//       ko: 'Even & Co 반영구화장'
//     },
//     snippet: {
//       en: 'Please click [Get Directions] button to get here.\nTel: ' + phone,
//       ko: 'Evie & Co 를 방문하시려면 길찾기를 클릭해주세요.\n전화: ' + phone,
//       ch: '请点击[获取路线]按钮进入此处.\nTel: ' + phone,
//       jp: 'ここへ行くには[道順を取得]ボタンをクリックしてください。.\nTel: ' + phone
//     },
//   }
// };

// /*
//  * For easier debugging in development mode, you can import the following file
//  * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
//  *
//  * This import should be commented out in production mode because it will have a negative impact
//  * on performance if an error is thrown.
//  */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.import { AppSettings } from 'src/app/services/app.settings';

