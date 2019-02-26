import { Injectable } from '@angular/core';
import { ToolbarMenu, SideMenu } from 'sonub-app-library/sonub-app-library-interfaces';
import { SonubAppLibraryService } from 'sonub-app-library/services/sonub-app-library.service';
import { Platform, MenuController } from '@ionic/angular';

@Injectable()
export class AppService {

    toolbarMenus: ToolbarMenu[];
    sideMenus: SideMenu[];


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
    constructor(
        private platform: Platform,
        private menuController: MenuController,
        public s: SonubAppLibraryService
    ) {


        this.platform.ready().then(() => {

            this.platform.backButton.subscribe(() => {
                if (this.menuController.isOpen()) {
                    this.menuController.close();
                }
            });

        });

        this.toolbarMenus = [
            {
                title: this.texts('gallery'),
                icon: 'photos',
                url: '/gallery'
            },
            {
                title: this.texts('forum'),
                icon: 'chatboxes',
                url: '/forum'
            },
            {
                title: this.texts('contact'),
                icon: 'contact',
                url: '/contact'
            },
            {
                title: this.texts('map'),
                icon: 'map',
                url: '/map'
            },
            {
                title: this.texts('menu'),
                icon: 'menu',
                openSideMenu: true
            }
        ];
        this.sideMenus = [
            {
                title: this.texts('website'),
                icon: 'home',
                url: 'https://evieco.shop',
                openWindow: true
            },
            {
                title: this.texts('facebook'),
                icon: 'logo-facebook',
                url: 'https://web.facebook.com/thruthesky',
                openWindow: true
            },
            {
                title: this.texts('setting'),
                icon: 'settings',
                url: '/setting',
            },
            {
                title: this.texts('close'),
                icon: 'close',
                close: true
            }
        ];

    }
    t(code: any, info?: any): string {
        return this.s.t(code, info);
    }
    texts(code: string) {
        return this.s.texts[code];
    }
}
