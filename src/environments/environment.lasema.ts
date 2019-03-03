// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { basicTexts } from 'modules/sonub-app-library/locales/basic';
const texts = basicTexts;



const phone = '0956-871-2485';
export const environment = {
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

    /**
     * Site settings.
     * @see README
     */
    sites: {
        en: {
            idx: '24',
            name: 'Lasema Spa & Jimjilbang',
            gallery: {
                type: 'sonub',
                idx_category: '62'
            },
            forum: {
                type: 'sonub',
                idx_category: '57'
            }
        },
        ko: {
            idx: '21',
            name: '라세마 스파 & 찜질방',
            gallery: {
                type: 'philgo',
                post_id: 'company_info',
                category: '21'
            },
            forum: {
                type: 'sonub',
                idx_category: '12'
            }
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
    },
    toolbarMenus: [
        {
            title: texts['gallery'],
            icon: 'photos',
            url: '/gallery'
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
            url: 'https://evieco.shop',
            openWindow: true
        },
        {
            title: texts['facebook'],
            icon: 'logo-facebook',
            url: 'https://web.facebook.com/thruthesky',
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
            close: true
        }
    ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
