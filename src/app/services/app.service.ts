import { Injectable } from '@angular/core';
import { ToolbarMenu, SideMenu } from 'sonub-app-library/sonub-app-library-interfaces';
import { SonubAppLibraryService } from 'sonub-app-library/services/sonub-app-library.service';

@Injectable()
export class AppService {

    toolbarMenus: ToolbarMenu[] = [
        // {
        //     title: '홈',
        //     icon: 'home',
        //     url: '/'
        // },
        {
            title: { en: 'Gallery', ko: '갤러리', ch: '画廊', jp: 'ギャラリー' },
            icon: 'photos',
            url: '/gallery'
        },
        {
            title: { en: 'Forum', ko: '게시판' },
            icon: 'chatboxes',
            url: '/forum'
        },
        {
            title: { en: 'Contacts', ko: '연락처' },
            icon: 'contact',
            url: '/contact'
        },
        {
            title: { en: 'Map', ko: '오시는길' },
            icon: 'map',
            url: '/map'
        },
        {
            title: { en: 'Mneu', ko: '메뉴' },
            icon: 'menu',
            openSideMenu: true
        }
    ];
    sideMenus: SideMenu[] = [
        {
            title: { en: 'Web Site', ko: '홈페이지' },
            icon: 'home',
            url: 'https://evieco.shop',
            openWindow: true
        },
        {
            title: { en: 'Facebook', ko: '페이스북'},
            icon: 'logo-facebook',
            url: 'https://web.facebook.com/thruthesky',
            openWindow: true
        },
        {
            title: { en: 'Settings', ko: '설정' },
            icon: 'settings',
            url: '/setting',
        },
        {
            title: { en: 'Close', ko: '닫기' },
            icon: 'close',
            close: true
        }
    ];
    constructor(
        public s: SonubAppLibraryService
    ) {

    }
    t(code: any, info: any) {
        return this.s.t(code, info);
    }
}
