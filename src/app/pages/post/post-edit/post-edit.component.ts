import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/ng-simplest/simplest.interface';
import { ActivatedRoute } from '@angular/router';
import { AppSettingFooterMenu } from 'src/app/services/interfaces';

@Component({
    selector: 'app-post-edit',
    templateUrl: './post-edit.component.html',
    styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {


    forumIndex: string;
    forumSetting: AppSettingFooterMenu;

    idx_site: string;
    post: Post = { title: '', content: '' };

    constructor(
        private activatedRoute: ActivatedRoute,
        public a: AppService
    ) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        console.log('PostEditComponent: ionViewDidEnter()');
        this.doInit();
    }

    doInit() {
        this.activatedRoute.queryParamMap.subscribe(params => {
            this.forumIndex = params.get('i');
            this.forumSetting = this.a.forumSetting(params.get('i'));

            if (params.get('action') === 'update') {
                this.a.sp.postGet(params.get('idx')).subscribe(post => {
                    Object.assign(this.post, post);
                }, e => this.a.error(e));
            }
        });
    }

    reset() {
        Object.assign(this.post, { title: '', content: '' });
    }

    onSubmit() {

        if (this.post.idx) { // update

            const data: Post = {
                idx: this.post.idx,
                title: this.post.title,
                content: this.post.content
            };

            const inc = this.a.isIncomplete(data);
            if (inc) {
                return this.a.error(inc);
            } else {
                this.a.sp.postUpdate(data).subscribe(post => {
                    this.a.openTab(this.forumSetting.url, this.forumIndex);
                    this.reset();
                }, e => this.a.error(e));
            }

        } else { // create
            this.post.relation = this.a.settings.site.idx;
            this.post.taxonomy = 'sites';
            this.post.idx_category = this.forumSetting.idx_category;

            if ((!this.post.content || !this.post.content.trim()) && !this.post.files) {
                return this.a.error(this.a.t('no_image_and_content'));
            }

            const inc = this.a.isIncomplete({ title: this.post.title });
            if (inc) {
                return this.a.error(inc);
            } else {
                this.a.sp.postCreate(this.post).subscribe(post => {
                    this.a.openTab(this.forumSetting.url, this.forumIndex);
                    this.reset();
                }, e => this.a.error(e));
            }
        }
    }
}


