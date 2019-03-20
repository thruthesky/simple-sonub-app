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

    @Input() forumIndex: string;
    @Input() forumSettings: AppSettingForum;
    @Input() root: Post;
    @Input() parent: Post & Comment;
    constructor(
        public a: AppService,
        public popup: PopupService
    ) {
    }

    ngOnInit() {
    }

    onClickReplyTo() {
        if (this.root['commentInUpdate']) {
            this.root['commentInUpdate'] = null;
        }
        return this.root['replyTo'] = this.parent.idx;
    }

    /**
     * apps will only support like or 'good' votes
     */
    onClickVote() {
        if (this.a.isLoggedIn) {
            this.a.vote(this.parent.idx, this.forumSettings.type, 'G').subscribe(res => {
                // console.log(res);
                this.parent.good = res.good;
            }, e => this.a.error(e));
        } else {
            this.a.error(this.a.t('login first'));
        }
    }

    onUpdate() {
        if (this.isPost) {
            this.a.openPostEdit(
                'update',
                this.forumIndex,
                this.parent.idx,
                this.forumSettings.post_id);
        } else {
            if (this.root['replyTo']) {
                this.root['replyTo'] = null;
            }
            this.root['commentInUpdate'] = this.parent.idx;
        }
    }

    async onDelete() {
        const confirm = await this.popup.open('confirm', this.a.t('confirm delete'));
        if (confirm === 'yes') {
            return this.a.delete(this.parent, this.forumSettings).subscribe(res => {
                this.commitDelete();
            }, e => this.a.error(e));
        } else {
            return;
        }
    }

    commitDelete() {
        const content_deleted = `( ${this.a.t('deleted')} )`;
        this.parent.content = content_deleted;
        this.parent['safe_content'] = content_deleted;
        this.parent.content_stripped = content_deleted;
        this.parent.stamp_deleted = '1';
        this.parent.files = [];

        if (this.isPost) {
            this.parent.title = content_deleted;
        }

        this.a.success(`${this.a.t('deleted')}!`);
    }

    async openPopUpMenu(context: string) {
        const popup = await this.popup.open(context);

        if (popup === 'delete') {
            return this.onDelete();
        } else if (popup === 'update') {
            return this.onUpdate();
        } else {
            return;
            // console.log(ret.data); dismissed with no action
        }
    }


    /**
     * return if post or comment belongs to the current logged user
     */
    get mine(): boolean {
        if (this.isDeleted) {
            return false;
        }

        if (this.parent.idx_user === this.a.sp.myIdx || this.parent.idx_user === this.a.myPhilgoIdx) {
            return true;
        }
        return false;
    }

    /**
     * determines if the post is deleted
     */
    get isDeleted(): boolean {
        if (this.parent.stamp_deleted === '0') {
            return false;
        }
        return true;
    }

    get isPost(): boolean {
        if (this.parent.idx_parent === '0') {
            return true;
        }
        return false;
    }
}

