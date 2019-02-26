import { Injectable } from '@angular/core';
import { ToolbarMenu, SideMenu } from 'sonub-app-library/sonub-app-library-interfaces';
import { SonubAppLibraryService } from 'sonub-app-library/services/sonub-app-library.service';
import { Platform, MenuController } from '@ionic/angular';
import { AppSettings } from './app.settings';

@Injectable()
export class AppService {

    toolbarMenus: ToolbarMenu[];
    sideMenus: SideMenu[];

    settings = new AppSettings();


    constructor(
        private platform: Platform,
        private menuController: MenuController,
        public s: SonubAppLibraryService
    ) {

        s.postGet('evieco.shop-gallery-1');

        // close side menu if it is opened
        this.platform.ready().then(() => {
            this.platform.backButton.subscribe(() => {
                if (this.menuController.isOpen()) {
                    this.menuController.close();
                }
            });
        });

        this.toolbarMenus = this.settings.toolbarMenus;
        this.sideMenus = this.settings.sideMenus;

    }
    t(code: any, info?: any): string {
        return this.s.t(code, info);
    }
    texts(code: string) {
        return this.s.texts[code];
    }
}
