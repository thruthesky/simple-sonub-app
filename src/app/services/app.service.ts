import { Injectable } from '@angular/core';
import { Platform, MenuController, ToastController } from '@ionic/angular';
import { AppSettings } from './app-settings.service';
import { SimplestService } from 'modules/ng-simplest/simplest.service';
import { PhilGoApiService } from 'modules/philgo-api/philgo-api.service';
import { Observable, throwError } from 'rxjs';
import { Post, PostList } from 'modules/ng-simplest/simplest.interface';
import { map } from 'rxjs/operators';
import { ApiPost } from 'modules/philgo-api/philgo-api-interface';
import { DomSanitizer } from '@angular/platform-browser';
import { AppSettingForum, Environment, AppSettingSite } from './interfaces';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AppLibrary } from './app-library.service';


@Injectable()
export class AppService {

    env: Environment = environment;

    constructor(
        private platform: Platform,
        private router: Router,
        private domSanitizer: DomSanitizer,
        private toastController: ToastController,
        private menuController: MenuController,
        public lib: AppLibrary,
        public sp: SimplestService,
        public settings: AppSettings,
        public philgo: PhilGoApiService
    ) {

        window['a'] = this;

        // this.test();

        /**
         * If there is only one site for one language, then set that language.
         */
        if (settings.noOfSites === 1) {
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

    }

    test() {
        this.open('/logout');
        // this.menuController.open();
    }
    t(code: any, info?: any): string {
        return this.lib.t(code, info);
    }
    texts(code: string) {
        return this.lib.texts[code];
    }

    /**
     * Returns posts from sonub or philgo
     * @param forum forum settings
     * @param page_no ..
     *
     * @todo cache
     */
    postList(forum: AppSettingForum, page_no: number): Observable<Post[]> {
        // console.log('forum: setting:', forum);

        if (forum.type === 'sonub') {
            return this.sp.postList({ idx_category: forum.idx_category }, {}).pipe(
                map((postList: PostList) => {
                    return postList.posts;
                })
            );
        } else if (forum.type === 'philgo') {
            return this.philgo.postSearch({ post_id: forum.post_id, category: forum.category }).pipe(
                map(search => {
                    // console.log('search: ', search);
                    const posts = this.transformPhilgoPostToSonubPost(search.posts);
                    // console.log('posts', posts);
                    return posts;
                })
            );
        } else {
            return throwError('Wrong forum type');
        }
    }

    private transformPhilgoPostToSonubPost(philgo_posts: ApiPost[]) {
        const posts: Array<Post> = [];
        for (const p of philgo_posts) {
            // console.log('p: ', p);
            const np: Post = {};
            np.idx = p.idx;
            np['post_id'] = p.post_id; // This is the mark that this post is philgo post.
            np['category'] = p.category;
            np.idx_user = '';
            np.idx_category = '';
            np.idx_parent = '';
            np.taxonomy = '';
            np.relation = '';
            np.slug = '';
            np.title = p.subject;
            np.content = p.content;
            np.content_stripped = p.content_stripped;
            // console.log(np.content_stripped );
            np.stamp_created = <any>p.stamp;
            np.stamp_updated = <any>p.stamp;
            np.files = [];
            if (p.files && p.files.length) {
                for (const f of p.files) {
                    const aF = {
                        idx: f.idx,
                        url: f.src
                    };
                    np.files.push(<any>aF);
                }
            }

            np.comments = [];
            if (p.comments && p.comments.length) {
                for (const c of p.comments) {
                    const nc = {
                        content: c.content
                    };
                    np.comments.push(nc);
                }
            }
            if (p.member && p.member.idx) {
                np.user = {
                    name: p.member.nickname,
                    idx: p.member.id,
                    stamp_create: p.member.stamp,
                    photo_url: ''
                };

                if (p.member.idx_primary_photo) {
                    const x = p.member.idx_primary_photo.split('').pop();
                    const path = `../data/upload/${x}/${p.member.idx_primary_photo}`;
                    np.user.photo_url =
                        `https://file.philgo.com/etc/image_resize.php` +
                        `?adaptive=1&w=24&h=24&path=${path}&qualty=80`;
                }
            }
            posts.push(np);
        }
        return posts;
    }

    safeHtml(text: string) {
        return this.domSanitizer.bypassSecurityTrustHtml(text);
    }

    open(url: string) {
        this.router.navigateByUrl(url);
    }

    openHome() {
        this.open('/home');
    }

    openProfile() {
        this.open('/profile');
    }

    /**
     * Display an error toast at the bottom.
     *
     * @param e error object. It can be an object or a string.
     * @example
     *      error({ error_code: '...', error_message: '...' })
     *      error( 'Error string' );
     */
    async error(e: any) {
        let message = '';
        if (typeof e === 'object' && e['error_code']) { // sonub error only
            if (e['error_code'] === 'email_in_use') {
                message = this.t('email_in_use');
            } else {
                message = `Error: ${e['error_message']} (${e['error_code']})`;
            }
        } else if (typeof e === 'string') { // error string
            message = e;
        } else {
            message = 'Error happended! But the error cannot be understood. What kind of error is it? see console.log';
            console.error(e);
        }
        // console.log(typeof e, e);
        // alert(`code: ${e.error_code}. message: ${e.error_message}`);

        const toast = await this.toastController.create({
            message: message,
            duration: 6000,
            showCloseButton: true,
            closeButtonText: 'Close',
            cssClass: 'error-toast'
        });

        toast.present();
    }

    isIncomplete(data: Object): any {
        let inc = '';
        Object.keys(data).forEach(k => {
            if (!data[k.trim()]) {
                inc += inc ? `, ${this.t(k)}` : `${this.t('required')} ${this.t(k)}`;
            }
        });
        return inc ? `${inc}.` : false;
    }


    get site(): AppSettingSite {
        return this.settings.site;
    }
}
