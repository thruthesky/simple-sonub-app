import { basicTexts } from 'modules/sonub-app-library/locales/basic';
import { Injectable } from '@angular/core';
import { LibraryService } from 'modules/sonub-app-library/services/library.service';
import { AppSettingSites, AppSettingSite } from './interfaces';
import { environment } from 'src/environments/environment';
import { ToolbarMenu, SideMenu } from 'modules/sonub-app-library/sonub-app-library-interfaces';

const texts = basicTexts;

@Injectable()
export class AppSettings {

    constructor(
        private lib: LibraryService
    ) {
        console.log('sites', this.sites);
    }
    get sites(): AppSettingSites {
        return <any>environment.sites;
    }
    /**
     * Returns the site settings of current language.
     * @example this.site.name
     */
    get site(): AppSettingSite {
        const ln = this.lib.languageCode;
        return this.sites[ln];
    }

    get toolbarMenus(): ToolbarMenu[] {
        return environment.toolbarMenus;
    }

    get sideMenus(): SideMenu[] {
        return this.site.sideMenus;
    }

    get map() {
        return environment.map;
    }
    /**
     * Returns no of sites.
     * How many langauge site are configured.
     */
    get noOfSites(): number {
        return Object.keys(this.sites).length;
    }
}

