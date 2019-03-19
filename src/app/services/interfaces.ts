

export interface AppSettingForum {
    type?: 'sonub' | 'philgo';
    idx_category?: string; // sonub only
    post_id?: string; // philgo only.
    category?: string; // philgo only
}

export interface AppSettingFooterMenu extends AppSettingForum {
    title: any;
    icon: string;
    url?: string;
    openSideMenu?: boolean;
    // type?: 'philgo' | 'sonub';
    // idx_category?: string; // sonub only
    // post_id?: string; // philgo only
    // category?: string; // philgo only
}






export interface AppContact {
    label: string;
    text?: string;          // Text to display. It can be phone number or url to show on screen
    click_url?: string;     // url to move when clicked

}

export interface AppSettingSite {
    idx: string;                    // Sonub site.idx
    name: any;                      // Website name
    url: string;                    // Website Url
    home: {
    };
    contact: {
        title: string;
        name: string;
        contacts: Array<AppContact>;
    };
    footerMenus: AppSettingFooterMenu[];
    sideMenus: AppSettingSideMenu[];    // side menus of each site.
}


export interface AppSettingSites {
    [index: string]: AppSettingSite;
}


export interface AppSettingMap {
    phone: string;
    lat: number;
    lng: number;
    title: {
        en: string;
        ko: string;
        ch: string;
        jp: string;
    };
    snippet: {
        en: string;
        ko: string;
        ch: string;
        jp: string;
    };
}


export interface AppSettingSideMenu {
    when?: 'login' | 'logout'; // # side menu when
    title: any;
    icon: string;
    url?: string;
    openWindow?: boolean;
    close?: boolean;
}


export interface Environment {
    production: boolean;
    simplest: {
        backendUrl: string;
        enableLoginToAllSubdomains: boolean;
    };
    philgo: {
        url: {
            webServer: string;
            fileServer: string;
        };
    };
    domain: string;
    configXml: {
        id: string;
        version: string;
        name: {
            en: string;
            ko?: string;
            ch?: string;
            jp?: string;
        }
        description: string
    };
    firstPageRoute: 'home' | 'gallery' | 'forum' | 'contact' | 'map';
    sites: AppSettingSites;
    sideMenu?: AppSettingSideMenu[];
    footerMenu?: AppSettingFooterMenu[];
    map: AppSettingMap;
    header?: {
        home?: boolean;
        gallery?: boolean;
        forum?: boolean;
        contact?: boolean;
        map?: boolean;
        setting?: boolean;
        login?: boolean;
        register?: boolean;
    };
}




