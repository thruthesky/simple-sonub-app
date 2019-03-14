import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Comment } from 'modules/ng-simplest/simplest.interface';

@Component({
    selector: 'app-comment-header',
    templateUrl: './comment-header.component.html',
    styleUrls: ['./comment-header.component.scss']
})
export class CommentHeaderComponent implements OnInit {

    @Input() comment: Comment;
    constructor(
        public a: AppService
    ) { }

    ngOnInit() {
    }

}

