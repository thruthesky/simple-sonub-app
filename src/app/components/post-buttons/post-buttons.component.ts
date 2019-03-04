import { Component, OnInit, Input } from '@angular/core';
import { Post, Comment, ErrorObject } from 'modules/ng-simplest/simplest.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'app-post-buttons',
    templateUrl: './post-buttons.component.html',
    styleUrls: ['./post-buttons.component.scss']
})
export class PostButtonsComponent implements OnInit {

    @Input() parent: Post | Comment;
    constructor(
        public a: AppService
    ) {
    }

    ngOnInit() {
        // if (this.parent) {
        //     console.log(this.parent);
        // }
    }

    get mine() {
        if (this.parent && this.parent.idx_user === this.a.sp.myIdx) {
            return true;
        }
        return false;
    }

    onClickEdit() {
        // if idx_parent === '0' then it is a post, otherwise it is a comment
        if (this.parent.idx_parent === '0') {

            /**
             * open post create / edit first
             *
             * then on submit do this.
             */

            // this.a.postEdit(this.parent).subscribe(res => {
            //     console.log(res);
            // }, (e: ErrorObject) => alert(e.error_message));
        } else {
            /**
             * change to comment box first
             *
             * then on submit do this.
             */

            // this.a.commentEdit(this.parent).subscribe(res => {
            //     console.log(res);
            // }, (e: ErrorObject) => alert(e.error_message));
        }
    }

    onClickDelete() {
        this.a.postDelete(this.parent.idx).subscribe(res => {
            this.parent.content = `( ${this.a.t('deleted')} )`;
            this.parent.content_stripped = `( ${this.a.t('deleted')} )`;
            this.parent.stamp_deleted = '1';
            this.parent.files = [];
            alert('Post has been deleted!');
        }, (e: ErrorObject) => alert(e.error_message));
    }

    onClickVote(vote: 'G' | 'B') {
        this.a.vote(this.parent.idx, vote).subscribe(res => {
            this.parent.good = res['good'];
            this.parent.bad = res['bad'];
        }, (e: ErrorObject) => alert(e.error_message));
    }
}
