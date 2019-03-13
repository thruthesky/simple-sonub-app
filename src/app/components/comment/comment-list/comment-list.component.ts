import { Component, OnInit, Input } from '@angular/core';
import { Comments, Post } from 'modules/ng-simplest/simplest.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

    @Input() post: Post;
    @Input() comments: Comments;
    constructor(
        public a: AppService
    ) {

    }

    ngOnInit() {
        // if (this.comments) {
        //     console.log(this.comments);
        // }
    }
}
