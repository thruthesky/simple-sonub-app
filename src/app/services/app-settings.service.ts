
import { Injectable } from '@angular/core';
import { AppSettingSites, AppSettingSite, AppSettingFooterMenu, AppSettingSideMenu } from './interfaces';
import { environment } from 'src/environments/environment';
import { SimplestService } from 'modules/ng-simplest/simplest.service';
import { basicTexts } from '../locales/basic';
import { AppLibrary } from './app-library.service';
// import { ToolbarMenu, SideMenu } from 'modules/sonub-app-library/sonub-app-library-interfaces';

const texts = basicTexts;

@Injectable()
export class AppSettings {

    constructor(
        private lib: AppLibrary,
        private sp: SimplestService
    ) {
        console.log('sites', this.sites);
    }
    get sites(): AppSettingSites {
        return <any>environment.sites;
    }
    /**
     * Returns the site settings of current language.
     * @example this.site.name
     * @warning ...
     */
    get site(): AppSettingSite {
        const ln = this.lib.languageCode;
        const site = this.sites[ln];
        if ( site ) {
            return site;
        } else {
            return this.sites['en'];
        }
    }

    get footerMenus(): AppSettingFooterMenu[] {
        // console.log('footerMenus: ', this.site.footerMenus);
        return this.site.footerMenus;
    }

    get sideMenus(): AppSettingSideMenu[] {
        return this.site.sideMenus;
    }

    /**
     * Returns side menus based on `when` condition.
     * @see README
     */
    get whenSideMenus(): AppSettingSideMenu[] {
        return this.sideMenus.filter(menu => {
            if (menu.when) {
                if ( menu.when === 'login' && this.sp.isLoggedIn ) {
                    return true;
                } else if ( menu.when === 'logout' && !this.sp.isLoggedIn ) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        });
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

