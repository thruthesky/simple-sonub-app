import { Injectable } from '@angular/core';
import { ToolbarMenu, SideMenu } from 'sonub-app-library/sonub-app-library-interfaces';
import { Platform, MenuController } from '@ionic/angular';
import { AppSettings } from './app.settings';
import { SimplestService } from 'modules/ng-simplest/simplest.service';
import { LibraryService } from 'sonub-app-library/services/library.service';


@Injectable()
export class AppService {

    toolbarMenus: ToolbarMenu[];
    sideMenus: SideMenu[];

    settings = new AppSettings();


    constructor(
        private platform: Platform,
        private menuController: MenuController,
        public lib: LibraryService,
        public sp: SimplestService
    ) {

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
        return this.lib.t(code, info);
    }
    texts(code: string) {
        return this.lib.texts[code];
    }
}
