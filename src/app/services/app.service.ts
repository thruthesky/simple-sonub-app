import { Injectable } from '@angular/core';
import { ToolbarMenu, SideMenu } from 'modules/sonub-app-library/sonub-app-library-interfaces';
import { Platform, MenuController } from '@ionic/angular';
import { AppSettings } from './app.settings';
import { SimplestService } from 'modules/ng-simplest/simplest.service';
import { LibraryService } from 'modules/sonub-app-library/services/library.service';


@Injectable()
export class AppService {

    toolbarMenus: ToolbarMenu[];
    sideMenus: SideMenu[];

    constructor(
        private platform: Platform,
        private menuController: MenuController,
        public lib: LibraryService,
        public sp: SimplestService,
        public settings: AppSettings
    ) {

        /**
         * If there is only one site for one language, then set that language.
         */
        if ( settings.noOfSites === 1 ) {
            const ln = Object.keys(settings.sites).pop();
            console.log('one siet: ', ln);
            lib.languageCode = ln;
        }

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
