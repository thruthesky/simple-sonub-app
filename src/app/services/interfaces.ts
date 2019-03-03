
export interface AppSettingForum {
    type: 'sonub' | 'philgo';
    idx_category?: string; // sonub only
    post_id?: string; // philgo only.
    category?: string; // philgo only
}


export interface AppSettingSite {
    idx: string;
    name: any;
    gallery?: AppSettingForum;
    forum?: AppSettingForum;
}


export interface AppSettingSites {
    [index: string]: AppSettingSite;
}
