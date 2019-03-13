import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'modules/ng-simplest/simplest.interface';

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.component.html',
    styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

    post: Post;

    constructor(
        activatedRoute: ActivatedRoute,
        public a: AppService
    ) {
        activatedRoute.queryParamMap.subscribe(params => {
            this.loadPost(params.get('idx'));
        });
    }

    ngOnInit() {
    }


    loadPost(idx: string) {
        this.a.sp.postGet(idx).subscribe(post => {
            post['safe_content'] = this.a.safeHtml(post.content);
            post.view = true;

            this.post = post;
        }, e => this.a.error(e));
    }
}


