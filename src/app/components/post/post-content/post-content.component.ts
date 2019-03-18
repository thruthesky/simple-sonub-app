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

    get imageInserted(): boolean {
        if (this.post && this.post.content) {
            if (this.post.content.indexOf(`/data/upload/`) > 0 || this.post.content.indexOf(`/files/uploads/`) > 0) {
                return true;
            }
        }
        return false;
    }

}
