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

    @Input() post: Post;
    @Input() parent: Comment;

    loading = false;
    form: Comment = <any>{
        content: ''
    };

    constructor(
        public a: AppService
    ) { }

    ngOnInit() {
    }

    createComment() {

        if (!this.form.content.trim()) {
            return this.a.error('Please Input Comment');
        }

        this.loading = true;
        this.form.idx_parent = this.parent.idx;

        this.a.sp.commentCreate(this.form).subscribe(comment => {
            console.log('create', comment);

            if (this.parent.idx_parent === '0') {
                comment['depth'] = '1';
                this.post.comments.push(comment);
            } else {

                const i = this.post.comments.findIndex(c =>
                    _.isEqual(c.idx, comment.idx_parent)
                );

                if (i !== -1) {
                    comment['depth'] = '' + (parseInt(this.post.comments[i].depth, 10) + 1);
                    this.post.comments.splice(i + 1, 0, comment);
                }

            }

            this.reset();

        }, e => this.a.error(e));
    }


    reset() {
        this.form = {};
        this.loading = false;
    }

    onCancel() {
        if (this.post['replyTo']) {
            this.post['replyTo'] = null;
        }
    }
}
