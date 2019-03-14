import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PostUser } from 'modules/ng-simplest/simplest.interface';

@Component({
    selector: 'app-comment-user-profile',
    templateUrl: './comment-user-profile.component.html',
    styleUrls: ['./comment-user-profile.component.scss']
})
export class CommentUserProfileComponent implements OnInit {

    @Input() user: PostUser;
    constructor(
        public a: AppService
    ) { }

    ngOnInit() {
    }

}

