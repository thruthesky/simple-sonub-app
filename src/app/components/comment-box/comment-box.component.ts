import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post, Comment } from 'modules/ng-simplest/simplest.interface';

@Component({
    selector: 'app-comment-box',
    templateUrl: './comment-box.component.html',
    styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {

    @Input() root: Post;
    @Input() parent: Post | Comment;
    @Input() comment: Comment;

    constructor(
        public a: AppService
    ) {
    }

    ngOnInit() {
    }

}


