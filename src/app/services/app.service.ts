import { Injectable } from '@angular/core';
import { Platform, MenuController, ToastController } from '@ionic/angular';
import { AppSettings } from './app-settings.service';
import { SimplestService } from 'modules/ng-simplest/simplest.service';
import { PhilGoApiService } from 'modules/philgo-api/philgo-api.service';
import { Observable, throwError } from 'rxjs';
import { Post, PostList, VoteResponse, Comment, PostUser, File } from 'modules/ng-simplest/simplest.interface';
import { map } from 'rxjs/operators';
import { ApiPost, ApiComment, ApiFile, ApiPostData } from 'modules/philgo-api/philgo-api-interface';
import { DomSanitizer } from '@angular/platform-browser';
import { AppSettingForum, Environment, AppSettingSite, AppSettingFooterMenu } from './interfaces';
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
            return this.sp.postList({ idx_category: forum.idx_category, page: page_no }, {}).pipe(
                map((postList: PostList) => {
                    return postList.posts;
                })
            );
        } else if (forum.type === 'philgo') {
            return this.philgo.postSearch({ post_id: forum.post_id, category: forum.category }).pipe(
                map(search => {
                    // console.log('search: ', search);
                    const posts = this.transformPhilgoPostsToSonubPosts(search.posts);
                    // console.log('posts', posts);
                    return posts;
                })
            );
        } else {
            return throwError('Wrong forum type');
        }
    }

    private transformPhilgoPostsToSonubPosts(philgo_posts: ApiPost[]) {
        const posts: Array<Post> = [];
        for (const p of philgo_posts) {
            // console.log('p: ', p);
            if (p.deleted === '0') {
                const np = this.transformPhilgoPostToSonubPost(p);
                // console.log('np: ', np);
                posts.push(np);
            }

        }
        return posts;
    }

    private transformPhilgoPostToSonubPost(post: ApiPost) {
        const np: Post = {};

        np.idx = post.idx;
        np['post_id'] = post.post_id; // This is the mark that this post is philgo post.
        np['category'] = post.category;
        np.idx_user = '';
        np.idx_category = '';
        np.idx_parent = post.idx_parent;
        np.idx_user = post.member.idx;
        np.taxonomy = '';
        np.relation = '';
        np.slug = '';
        np.title = post.subject;
        np.content = post.content;
        np.content_stripped = post.content_stripped;
        np.good = post.good ? post.good : '0';
        np.bad = post.bad ? post.bad : '0';
        // console.log(np.content_stripped );
        np.stamp_created = <any>post.stamp;
        np.stamp_updated = <any>post.stamp;
        np.stamp_deleted = post.deleted ? post.deleted : '0';
        np.files = this.transformPhilgoFilesToSonubFiles(post.files);

        np.comments = [];
        if (post.comments && post.comments.length) {
            for (const c of post.comments) {
                const nc = this.transformPhilgoCommentToSonubComment(c);
                np.comments.push(nc);
            }
        }
        /**
         * Setting post user's name, photo_url.
         */
        if (post.member && post.member.idx) {
            np.user = {
                name: post.member.nickname,
                idx: post.member.id,
                stamp_create: post.member.stamp,
                photo_url: ''
            };

            if (post.member.idx_primary_photo) {
                np.user.photo_url = this.getPhilgoPhotoUrl(post.member.idx_primary_photo);
            }
        }
        return np;
    }

    private transformPhilgoCommentToSonubComment(c: ApiComment) {
        const nc: Comment = {
            idx: c.idx,
            idx_root: c.idx_root,
            idx_parent: c.idx_parent,
            idx_user: c.member.idx,
            depth: c.depth,
            content: c.content,
            content_stripped: c.content_stripped,
            stamp_created: c.stamp,
            stamp_updated: c.stamp,
            stamp_deleted: c.deleted ? c.deleted : '0',
            good: c.good ? c.good : '0',
            bad: c.bad ? c.bad : '0',
            user: <PostUser>{}
        };

        nc.files = this.transformPhilgoFilesToSonubFiles(c.files);


        /**
         * Setting comemnt user's profile.
         */
        if (c.member && c.member.idx) {
            nc.user.idx = c.member.idx;
            nc.user.name = c.member.name;
            nc.user.photo_url = c.member.idx_primary_photo ? this.getPhilgoPhotoUrl(c.member.idx_primary_photo) : '';
        }
        return nc;
    }

    private transformPhilgoFilesToSonubFiles(files: ApiFile[]) {
        const arr: File[] = [];
        if (files && files.length) {
            for (const f of files) {
                const aF = {
                    idx: f.idx,
                    url: f.src,
                };
                arr.push(<any>aF);
            }
        }
        return arr;
    }

    getPhilgoPhotoUrl(idx: string): string {
        const x = idx.split('').pop();
        const path = `../data/upload/${x}/${idx}`;
        return `https://file.philgo.com/etc/image_resize.php?adaptive=1&w=24&h=24&path=${path}&qualty=80`;
    }

    philgoLoginOrRegister() {
        if (this.isLoggedIn) {
            this.philgo.loginOrRegister({
                user_domain: 'sonub',
                user_email: 'sonub-' + this.sp.myEmail,
                user_password: 'sonub-' + this.sp.myIdx + this.sp.user.stamp_created,
                user_name: this.sp.myName + '@sonub',
                char_7: 'M'
            }).subscribe(user => {
            }, e => {
                console.error(e);
            });
        }
    }

    /**
     * @param idx post or comment idx
     * @param forum_type 'philgo' | 'sonub'
     * @param vote 'G' | 'B'
     */
    vote(idx: string, forum_type: string, vote: 'G' | 'B'): Observable<VoteResponse> {
        if (forum_type === 'sonub') {
            return this.sp.vote({ idx_post: idx, vote: vote });
        } else {
            return this.philgo.postLike({ idx: idx, mode: vote === 'G' ? 'good' : 'bad' }).pipe(
                // return sample { idx: null, mode: "good", result: 1 }
                map(res => {
                    const v = <VoteResponse>{};
                    if (res.mode === 'good') {
                        v.good = res.result;
                        v.bad = '0';
                    } else {
                        v.bad = res.result;
                        v.good = '0';
                    }
                    return v;
                })
            );
        }
    }

    /**
     * @param comment comment data
     * @param forum forum setting
     */
    commentCreate(comment: Comment, forum: AppSettingForum): Observable<Comment> {
        if (forum.type === 'sonub') {
            return this.sp.commentCreate(comment);
        } else {

            const data = <ApiComment>{
                content: comment.content,
                idx_parent: comment.idx_parent,
                gid: this.philgo.generateGid(),
            };

            return this.philgo.commentCreate(data).pipe(
                map(res => {
                    const c = this.transformPhilgoCommentToSonubComment(res);
                    return c;
                })
            );
        }
    }

    commentUpdate(comment: Comment, forum: AppSettingForum): Observable<Comment> {
        if (forum.type === 'sonub') {
            return this.sp.commentUpdate(comment);
        } else {
            const data = <ApiComment>{
                idx: comment.idx,
                content: comment.content
            };
            return <any>this.philgo.postEdit(<any>data).pipe(
                map(res => {
                    const c = this.transformPhilgoCommentToSonubComment(<any>res);
                    return c;
                })
            );
        }
    }

    postCreate(post: Post, forum: AppSettingForum): Observable<Post> {
        if (forum.type === 'sonub') {
            return this.sp.postCreate(post);
        } else {
            const data = <ApiPostData>{
                subject: post.title,
                content: post.content,
                category: forum.category,
                post_id: forum.post_id
            };
            return this.philgo.postCreate(data).pipe(
                map(res => {
                    const p = this.transformPhilgoPostToSonubPost(res);
                    return p;
                })
            );
        }
    }

    postUpdate(post: Post, forum: AppSettingForum): Observable<Post> {
        if (forum.type === 'sonub') {
            return this.sp.postUpdate(post);
        } else {
            const data = <ApiPostData>{
                idx: post.idx,
                content: post.content,
                subject: post.title,
            };
            return this.philgo.postEdit(data).pipe(
                map(res => {
                    const p = this.transformPhilgoPostToSonubPost(res);
                    return p;
                })
            );
        }
    }

    postGet(idx: string, forum_type: string): Observable<Post> {
        if (forum_type === 'sonub') {
            return this.sp.postGet(idx);
        } else {
            return this.philgo.postGet(idx).pipe(
                map(res => {
                    const p = this.transformPhilgoPostToSonubPost(res);
                    return p;
                })
            );
        }
    }

    delete(data: Post & Comment, forum: AppSettingForum) {
        if (forum.type === 'sonub') {
            return this.sp.postDelete(data.idx);
        } else {
            return this.philgo.postDelete({ idx: data.idx }).pipe(
                map(res => {
                    const content_deleted = `( ${this.t('deleted')} )`;

                    data.content = content_deleted;
                    data.content_stripped = content_deleted;
                    data.stamp_deleted = '1';

                    if (data.title && data.title.length) {
                        data.title = content_deleted;
                    }
                    return data;
                })
            );
        }
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


    openTab(url: string, forumIndex: string) {
        this.open(`${url}?i=${forumIndex}`);
    }

    /**
     * redirect to post-edit view page.
     *
     * @param action 'create' | 'update'
     * @param forumIndex forumindex
     * @param post_or_category_idx can be post idx, sonub category idx or philgo category idx
     * @param post_id
     *  - if [action] is `create` then this is category_idx.
     *  - if [action] is `update` then this is post_idx.
     */
    openPostEdit(action: string, forumIndex: string, post_or_category_idx?: string, post_id?: string) {
        let url = '';

        if (action === 'create') {
            url = `/post/edit?action=${action}&category=${post_or_category_idx}&i=${forumIndex}`;
        } else {
            url = `/post/edit?action=${action}&idx=${post_or_category_idx}&i=${forumIndex}`;
        }

        if (post_id !== '') {
            url += `&post_id=${post_id}`;
        }

        this.open(url);
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

    async success(mssg: string) {
        const toast = await this.toastController.create({
            message: mssg,
            duration: 3000,
            showCloseButton: true,
            closeButtonText: 'Close',
            cssClass: 'success-toast'
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

    shortDate(timestamp: any) {
        return this.philgo.shortDate(timestamp);
    }

    /**
     * Returns a forum setting
     * @param i index of the forum settings array
     */
    forumSetting(i): AppSettingFooterMenu {
        if (!i) {
            return <any>{};
        }
        return this.settings.footerMenus[i];
    }

    get site(): AppSettingSite {
        return this.settings.site;
    }

    get isLoggedIn(): boolean {
        return this.sp.isLoggedIn;
    }

    get myPhilgoIdx(): string {
        return this.philgo.myIdx();
    }

    get mySonubIdx(): string {
        return this.sp.myIdx;
    }
}

