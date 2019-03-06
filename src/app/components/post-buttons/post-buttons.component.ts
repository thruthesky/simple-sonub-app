import { Component, OnInit, Input } from '@angular/core';
import { Post, Comment } from 'modules/ng-simplest/simplest.interface';
import { AppService } from 'src/app/services/app.service';
import { AppSettingForum } from 'src/app/services/interfaces';

@Component({
    selector: 'app-post-buttons',
    templateUrl: './post-buttons.component.html',
    styleUrls: ['./post-buttons.component.scss']
})
export class PostButtonsComponent implements OnInit {

    @Input() parent: Post & Comment;
    @Input() forum: AppSettingForum;
    constructor(
        public a: AppService
    ) {
    }

    ngOnInit() {
    }

    /**
     * return current host url
     */
    get hostUrl(): string {
        return this.a.settings.site.url;
    }

    get forumType(): string {
        return this.forum.type;
    }

    get mine(): boolean {
        if (this.parent && this.parent.idx_user === this.a.sp.myIdx) {
            return true;
        }
        return false;
    }

    get postIdx() {
        if (this.parent.idx_root !== '0') {
            return this.parent.idx_root;
        } else if (this.parent.idx_parent !== '0') {
            return this.parent.idx_parent;
        } else {
            return this.parent.idx;
        }
    }

    openExternal(action: string, method?: string) {
        if (method === '') {
            method = action;
        }
        let redirect_url = 'r=';

        if (this.forumType === 'sonub') {
            /**
             * @format
             * - update post `post/:editor/:action/:post_id`
             *      [:editor] may vary from `simple-editor`, `text-editor` and `ckeditor-editor`
             *
             * - view post `post/:action/:post_idx/:title`
             */
            if (action === 'update') {
                redirect_url += `post/${this.parent.editor}/${action}/${this.postIdx}`;
            } else {
                redirect_url += `post/${action}/${this.postIdx}/${this.parent.title}`;
            }
        } else {

            // remove this, added this for reminder
            return console.log('philgo forum type post redirect is not working yet');

            /**
             * @format
             * - update post `philgo/update/:category_id.sub_cat/:post_idx`;
             *      [:category_id] is appended by it's [:sub_category] if there is any
             *
             * - view post `philgo/view/:category_id/:post_idx`
             *
             * @note
             * - this is not working properly yet
             * - this need to be tests for philgo posts
             */
            if (action === 'update') {
                redirect_url += `philgo/${action}/${this.parent.idx_category}/${this.postIdx}`;
            } else {
                redirect_url += `philgo/${action}/${this.parent.idx_category}/${this.postIdx}`;
            }
        }

        this.a.openExternal(`${this.hostUrl}/login-first?${redirect_url}&m=${method}&idx=${this.a.sp.myIdx}`);
    }
}

