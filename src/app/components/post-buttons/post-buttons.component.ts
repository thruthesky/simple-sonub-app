import { Component, OnInit, Input } from '@angular/core';
import { Post, Comment } from 'modules/ng-simplest/simplest.interface';
import { AppService } from 'src/app/services/app.service';
import { AppSettingForum } from 'src/app/services/interfaces';
import { PopupService } from 'src/app/services/popup.service';

@Component({
    selector: 'app-post-buttons',
    templateUrl: './post-buttons.component.html',
    styleUrls: ['./post-buttons.component.scss']
})
export class PostButtonsComponent implements OnInit {

    @Input() root: Post;
    @Input() parent: Post & Comment;
    @Input() forum: AppSettingForum;
    constructor(
        public a: AppService,
        public popup: PopupService
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

    onClickReplyTo() {
        return this.root['replyTo'] = this.parent.idx;
    }

    onClickVote() {
        this.a.vote(this.parent.idx, 'G').subscribe(res => {
            console.log(res);

            this.parent.good = res.good;
        });
    }

    onDelete() {
        if (this.parent.idx_parent === '0') {
            this.a.sp.postDelete(this.parent.idx).subscribe(res => {
                this.parent.title = 'deleted';
                this.parent.content = 'deleted';
                this.parent.content_stripped = 'deleted';
                this.parent.stamp_deleted = '1';
            }, e => this.a.error(e));
        } else {
            this.a.sp.commentDelete(this.parent.idx).subscribe(res => {
                this.parent.content = 'deleted';
                this.parent.content_stripped = 'deleted';
                this.parent.stamp_deleted = '1';
                this.parent.files = [];
            }, e => this.a.error(e));
        }
    }

    onClickMenu() {
        this.popup.openPopupMenu('e', 'e').then(e => {
            console.log(e);
        });
    }

}

