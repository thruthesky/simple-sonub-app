import { Component, OnInit, Input } from '@angular/core';
import { Comment, Post } from 'modules/ng-simplest/simplest.interface';
import { AppService } from 'src/app/services/app.service';
import { AppLibrary as _ } from '../../services/app-library.service';

@Component({
    selector: 'app-comment-box',
    templateUrl: './comment-box.component.html',
    styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {

    /**
     * this will always have a post value.
     */
    @Input() root: Post;

    /**
     * only available when replying to a post or comment.
     */
    @Input() parent: Post & Comment;

    /**
     * only available when updating comment.
     * if this have value, the action is comment update
     */
    @Input() comment: Comment = null;

    loading = false;
    form: Comment = {
        content: ''
    };

    constructor(
        public a: AppService
    ) {
        if (this.comment) {
            this.form.content = this.comment.content;
        }
    }

    ngOnInit() {
    }

    onSubmit() {
        this.loading = true;

        if (this.comment) {
            return this.updateComment();
        } else {
            return this.createComment();
        }
    }

    createComment() {
        if (!this.form.content.trim()) {
            return this.a.error('Please Input Comment');
        }

        this.form.idx_parent = this.parent.idx;
        this.a.sp.commentCreate(this.form).subscribe(comment => {

            if (this.parent.idx_parent === '0') {
                comment['depth'] = '1';
                this.root.comments.push(comment);
            } else {
                const i = this.root.comments.findIndex(c =>
                    _.isEqual(c.idx, comment.idx_parent)
                );

                if (i !== -1) {
                    comment['depth'] = '' + (parseInt(this.root.comments[i].depth, 10) + 1);
                    this.root.comments.splice(i + 1, 0, comment);
                }
            }
            this.a.success('Comment Created!');
            this.reset();

        }, e => this.a.error(e));
    }

    updateComment() {
        if (!this.form.content.trim()) {
            return this.a.error('Please Input Comment');
        }

        this.form.idx = this.comment.idx;
        this.a.sp.commentUpdate(this.form).subscribe(comment => {

            comment['update'] = null;
            Object.assign(this.comment, comment);
            this.a.success('Comment Updated!');
            this.reset();

        }, e => this.a.error(e));
    }


    reset() {
        this.form = {};
        this.loading = false;

        if (this.root['replyTo']) {
            this.root['replyTo'] = null;
        }
        if (this.root['commentInUpdate']) {
            this.root['commentInUpdate'] = null;
        }
    }

    get showReset(): boolean {
        if (this.parent && this.parent.idx_parent === '0') {
            return false;
        }

        return true;
    }
}
