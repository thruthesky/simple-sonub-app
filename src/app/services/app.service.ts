import { Injectable } from '@angular/core';
import { ToolbarMenu, SideMenu } from 'sonub-app-library/sonub-app-library-interfaces';

@Injectable()
export class AppService {
    toolbarMenus: ToolbarMenu[] = [
        {
            title: '홈',
            icon: 'home',
            url: '/'
        },
        {
            title: '갤러리',
            icon: 'photos',
            url: '/'
        },
        {
            title: '게시판',
            icon: 'chatboxes',
            url: '/'
        },
        {
            title: '오시는길',
            icon: 'map',
            url: '/'
        },
        {
            title: '메뉴',
            icon: 'menu',
            showSideMenu: true
        }
    ];
    sideMenus: SideMenu[] = [
        {
            title: '홈',
            icon: 'home',
            url: '/'
        },
        {
            title: '페이스북',
            icon: 'logo-facebook',
            url: '/'
        },
        {
            title: '홈',
            icon: 'close',
            close: true
        }
    ];
    constructor() { }
}
