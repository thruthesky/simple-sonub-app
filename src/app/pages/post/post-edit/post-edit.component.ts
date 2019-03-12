import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/ng-simplest/simplest.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-post-edit',
    templateUrl: './post-edit.component.html',
    styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

    /**
     * this values will be used for post creation.
     *
     * [idx_category] current category idx - will be inherited by the `post.idx_category`
     * [idx_site] current site idx - will be inherited by the `post.relation`
     *
     */
    idx_category: string;
    idx_site: string;
    post: Post = { title: '', content: '' };

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        public a: AppService
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.load();
    }

    ionViewWillLeave() {
        this.reset();
    }

    load() {
        this.activatedRoute.queryParamMap.subscribe(params => {
            this.idx_category = params.get('category');

            // load post if update
            if (params.get('action') === 'update') {
                this.a.sp.postGet(params.get('idx')).subscribe(post => {
                    console.log(post);
                    Object.assign(this.post, post);
                }, e => this.a.error(e));
            }
        });
    }

    reset() {
        Object.assign(this.post, { title: '', content: '' });
    }


    onSubmit() {
        if (this.post.idx) {

            const data: Post = {
                idx: this.post.idx,
                title: this.post.title,
                content: this.post.content,
                editor: 'simple-editor'
            };

            this.a.sp.postUpdate(data).subscribe(post => {
                this.openPost();
            }, e => this.a.error(e));

        } else {

            // this.post.relation = this.a.settings.site.idx;
            this.post.relation = '5';      // test only 
            this.post.taxonomy = 'sites';
            this.post.editor = 'text-editor';
            this.post.idx_category = this.idx_category;

            this.a.sp.postCreate(this.post).subscribe(post => {
                this.openPost();
            }, e => this.a.error(e));

        }
    }

    openPost() {
        this.router.navigateByUrl('/post/view', { queryParams: { idx: this.post.idx } });
    }

}


