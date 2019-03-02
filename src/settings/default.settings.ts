import { basicTexts } from 'modules/sonub-app-library/locales/basic';
import { ToolbarMenu, SideMenu } from 'modules/sonub-app-library/sonub-app-library-interfaces';
import { AppSettingSites } from '../app/services/interfaces';

const texts = basicTexts;

export class AppSettings {

    /**
     * Site settings.
     * @see README
     */
    sites: AppSettingSites = {
            en: {
                idx: '24',
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
        };

    /**
     * Phone number to be appear on map.
     */
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
}
