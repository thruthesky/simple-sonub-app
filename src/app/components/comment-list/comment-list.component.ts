import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'modules/ng-simplest/simplest.interface';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

    @Input() post: Post;
    constructor(
        // public a: AppService
    ) {

    }

    ngOnInit() {

    }
}
