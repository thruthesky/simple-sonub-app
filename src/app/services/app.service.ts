import { Injectable } from '@angular/core';
import { ToolbarMenu, SideMenu } from 'sonub-app-library/sonub-app-library-interfaces';

@Injectable()
export class AppService {
    toolbarMenus: ToolbarMenu[] = [
        // {
        //     title: '홈',
        //     icon: 'home',
        //     url: '/'
        // },
        {
            title: '갤러리',
            icon: 'photos',
            url: '/gallery'
        },
        {
            title: '게시판',
            icon: 'chatboxes',
            url: '/forum'
        },
        {
            title: '연락처',
            icon: 'contact',
            url: '/contact'
        },
        {
            title: '오시는길',
            icon: 'map',
            url: '/map'
        },
        {
            title: '메뉴',
            icon: 'menu',
            openSideMenu: true
        }
    ];
    sideMenus: SideMenu[] = [
        {
            title: '홈페이지',
            icon: 'home',
            url: 'https://evieco.shop',
            openWindow: true
        },
        {
            title: '페이스북',
            icon: 'logo-facebook',
            url: 'https://web.facebook.com/thruthesky',
            openWindow: true
        },
        {
            title: '닫기',
            icon: 'close',
            close: true
        }
    ];
    constructor() { }
}
