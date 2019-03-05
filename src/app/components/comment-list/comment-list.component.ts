import { Component, OnInit, Input } from '@angular/core';
import { Comments } from 'modules/ng-simplest/simplest.interface';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

    @Input() comments: Comments;
    constructor(
        // public a: AppService
    ) {

    }

    ngOnInit() {
        // if (this.comments) {
        //     console.log(this.comments);
        // }
    }
}
