import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/ng-simplest/simplest.interface';

@Component({
    selector: 'app-post-content',
    templateUrl: './post-content.component.html',
    styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit {

    @Input() post: Post;

    constructor(
        public a: AppService
    ) {

    }

    ngOnInit() {
    }

}


