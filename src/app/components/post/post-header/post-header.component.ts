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
        // if (this.post) {
        //     console.log(this.post);
        // }
    }

    get subtitleContent() {
        if (!this.post.comments.length) {
            return null;
        }
        const nonDeletedComments = [];
        this.post.comments.forEach(comment => {
            if (comment.content.trim()) {
                nonDeletedComments.push(`${comment.content} - <i>Comment by ${comment.user.name}</i>`);
            }
        });
        return nonDeletedComments.length ? this.a.safeHtml(nonDeletedComments.shift()) : null;
    }
}


