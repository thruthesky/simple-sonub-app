import { Component, OnInit, Input } from '@angular/core';
import { Post, Comment } from 'modules/ng-simplest/simplest.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'app-post-buttons',
    templateUrl: './post-buttons.component.html',
    styleUrls: ['./post-buttons.component.scss']
})
export class PostButtonsComponent implements OnInit {

    @Input() parent: Post & Comment;
    constructor(
        public a: AppService
    ) {
    }

    ngOnInit() {
    }

    /**
     * returns this.parent type
     *
     * @return 'post' | 'comment'
     */
    get type(): string {
        if (this.parent.idx_parent === '0') {
            return 'post';
        } else {
            return 'comment';
        }
    }

    /**
     * return forum type - 'sonub' | 'philgo'
     */
    get forum(): string {
        return this.a.settings.site.forum.type;
    }


    /**
     * return current host url
     */
    get hostUrl(): string {
        return this.a.settings.site.url;
    }

    get mine(): boolean {
        if (this.parent && this.parent.idx_user === this.a.sp.myIdx) {
            return true;
        }
        return false;
    }

    /**
     * @param action like | dislike | create | update | delete
     * @param type post | comment
     * @param idx category_idx | post_idx | comment_idx
     */
    openExternal(action: string) {
        let idx = this.parent.idx;
        /**
         * if comment, append idx_parent
         */
        if (this.type === 'comment') {
            idx = `${this.parent.idx_parent}.${idx}`;
        }
        this.a.openExternal(`${this.hostUrl}/login-first/${this.forum}/${action}/${this.type}/${idx}`);
    }
}

