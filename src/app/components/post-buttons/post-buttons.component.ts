import { Component, OnInit, Input } from '@angular/core';
import { Post, Comment } from 'modules/ng-simplest/simplest.interface';
import { AppService } from 'src/app/services/app.service';
import { PopoverController } from '@ionic/angular';
import { PopupMenuComponent } from '../popup-menu/popup-menu.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-buttons',
    templateUrl: './post-buttons.component.html',
    styleUrls: ['./post-buttons.component.scss']
})
export class PostButtonsComponent implements OnInit {

    @Input() forumIndex: string;
    @Input() root: Post;
    @Input() parent: Post & Comment;
    constructor(
        public a: AppService,
        private router: Router,
        private popoverController: PopoverController
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
        this.a.vote(this.parent.idx, 'G').subscribe(res => {
            console.log(res);

            this.parent.good = res.good;
        }, e => this.a.error(e));
    }

    onDelete() {
        const content_deleted = this.a.t('deleted');

        if (this.parent.idx_parent === '0') {
            this.a.sp.postDelete(this.parent.idx).subscribe(res => {
                this.parent.title = `(${content_deleted})`;
                this.parent.content = `(${content_deleted})`;
                this.parent.content_stripped = `(${content_deleted})`;
                this.parent.stamp_deleted = '1';

                this.a.success('Post Deleted!');

            }, e => this.a.error(e));
        } else {
            this.a.sp.commentDelete(this.parent.idx).subscribe(res => {
                this.parent.content = `(${content_deleted})`;
                this.parent.content_stripped = `(${content_deleted})`;
                this.parent.stamp_deleted = '1';
                this.parent.files = [];

                this.a.success('Comment Deleted!');

            }, e => this.a.error(e));
        }
    }


    onUpdate() {
        if (this.parent.idx_parent === '0') {
            this.a.openPostEdit('update', this.forumIndex, this.parent.idx);
        } else {
            if (this.root['replyTo']) {
                this.root['replyTo'] = null;
            }
            this.root['commentInUpdate'] = this.parent.idx;
        }
    }

    async openPopupMenu(ev: any): Promise<any> {
        const popover = await this.popoverController.create({
            component: PopupMenuComponent,
            event: ev,
            translucent: true
        });
        popover.onDidDismiss().then(ret => {
            if (ret.data === 'delete') {
                this.onDelete();
            } else if (ret.data === 'update') {
                this.onUpdate();
            } else {
                // console.log(ret.data); dismissed with no action
            }
        });
        return await popover.present();
    }

    /**
     * return if post or comment belongs to the current logged user
     */
    get mine(): boolean {
        if (this.isDeleted) {
            return false;
        }
        if (this.parent && this.parent.idx_user === this.a.sp.myIdx) {
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
}

