import { Component, OnInit, Input } from '@angular/core';
import { Comment, Post } from 'modules/ng-simplest/simplest.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'app-comment-content',
    templateUrl: './comment-content.component.html',
    styleUrls: ['./comment-content.component.scss']
})
export class CommentContentComponent implements OnInit {

    @Input() root: Post;
    @Input() comment: Comment;
    constructor(
        public a: AppService
    ) {

    }

    ngOnInit() {
        this.comment['safe_content'] = this.a.safeHtml(this.comment.content);
        // console.log(this.comment);
    }

    get content(): string {
        if (this.comment.stamp_deleted !== '0') {
            return `(${this.a.t('deleted')})`;
        } else {
            return this.comment['safe_content'];
        }
    }
}
