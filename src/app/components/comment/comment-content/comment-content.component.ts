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

    safeContent = null;
    constructor(
        public a: AppService
    ) {

    }

    ngOnInit() {
        this.safeContent = this.a.safeHtml(this.comment.content);
    }

    get deleted() {
        return `(${this.a.t('deleted')})`;
    }
}
