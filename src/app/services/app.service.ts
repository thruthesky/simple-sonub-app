import { Injectable } from '@angular/core';
import { ToolbarMenu, SideMenu } from 'sonub-app-library/sonub-app-library-interfaces';
import { SonubAppLibraryService } from 'sonub-app-library/services/sonub-app-library.service';
import { Platform, MenuController } from '@ionic/angular';
import { AppSettings } from './app.settings';
import * as yaml from 'js-yaml';


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

        s.postQuery({
            fields: '*',
            where: `taxonomy='sites' AND relation=${this.settings.siteIdx} AND access_code LIKE 'gallery-%'`,
            limit: '10',
            orderby: 'access_code asc'
        }).subscribe(res => {
            console.log('post.query: ', res);
            this.settings.gallery = [];
            for (const p of res) {
                try {
                    const doc = yaml.safeLoad(p['content']);
                    console.log('doc: ', doc);
                    this.settings.gallery.push( doc );
                } catch (e) {
                    console.error(e);
                }
            }
        }, e => console.error(e));

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
