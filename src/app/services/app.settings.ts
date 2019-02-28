import { basicTexts } from 'sonub-app-library/locales/basic';
import { ToolbarMenu, SideMenu } from 'sonub-app-library/sonub-app-library-interfaces';

const texts = basicTexts;
export class AppSettings {
    siteIdx = '21';
    mapPhone = '0956-871-2485';
    mapLat = 14.5894;
    mapLng = 120.981;
    mapTitle = {
        en: 'Evie & Co Microblading!',
        ko: 'Even & Co 반영구화장'
    };
    mapSnippet = {
        en: 'Please click [Get Directions] button to get here.\nTel: ' + this.mapPhone,
        ko: 'Evie & Co 를 방문하시려면 길찾기를 클릭해주세요.\n전화: ' + this.mapPhone,
        ch: '请点击[获取路线]按钮进入此处.\nTel: ' + this.mapPhone,
        jp: 'ここへ行くには[道順を取得]ボタンをクリックしてください。.\nTel: ' + this.mapPhone
    };
    toolbarMenus: ToolbarMenu[] = [
        {
            title: texts['gallery'],
            icon: 'photos',
            url: '/gallery'
        },
        {
            title: texts['forum'],
            icon: 'chatboxes',
            url: '/forum'
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
    ];
    sideMenus: SideMenu[] = [
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
    ];

    gallery = [
        {
            header: {
                en: 'header',
                ko: '반영구 화장이란?'
            },
            title: {
                en: 'title',
                ko: '나 자신을 빛나게하는 최고의 선물!'
            },
            content: {
                en: `Keep close to Nature's heart...
                        and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.`,
                ko: `반영구 화장에 대한 설명과 내용입니다. 오늘의 멋진 일상을 반영구 화장으로 시작해 보세요. 누구든지 생활의 활력소를 불어넣어 드립니다.`
            }
        },
        {
            header: {
                en: 'header 2',
                ko: '반영구 화장이란? 2'
            },
            title: {
                en: 'title 2',
                ko: '나 자신을 빛나게하는 최고의 선물! 2'
            },
            content: {
                en: `Keep close to Nature's heart...
                    and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.`,
                ko: `반영구 화장에 대한 설명과 내용입니다. 오늘의 멋진 일상을 반영구 화장으로 시작해 보세요. 누구든지 생활의 활력소를 불어넣어 드립니다.`
            }
        }
    ];
}
