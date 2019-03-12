import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/ng-simplest/simplest.interface';

@Component({
    selector: 'app-post-header',
    templateUrl: './post-header.component.html',
    styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent implements OnInit {

    @Input() post: Post;

    constructor(
        public a: AppService
    ) {

    }

    ngOnInit() {
    }

}


