import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Posts, Post } from 'modules/ng-simplest/simplest.interface';
import { AppSettingForum } from 'src/app/services/interfaces';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  /**
   * gallery type will show post title content, images and comments.
   *  - when title is clicked, it will hide content, images and comment ( if any ).
   *
   * text type will only show post title.
   * - when title is clicked, it will show content, images and comment ( if any )..
   */
  @Input() designType: 'gallery' | 'text';

  // loaded = false;
  intval = 0;


  /**
   * Forum settings from environemnt.
   */
  forumSettings: AppSettingForum;
  forumIndex: string;

  page_no = 0;
  limit = 10;
  no_more_post = false;
  posts: Posts = [];

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private activatedRoute: ActivatedRoute,
    public a: AppService
  ) {
    this.a.philgoLoginOrRegister();
  }

  ngOnInit() {
  }

  doInit() {
    // console.log('PostListComponent::ionViewDidEnter()');
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.forumIndex = params.get('i');
      this.forumSettings = this.a.forumSetting(params.get('i'));
      this.loadPage();
    });
  }

  loadPage(event?: any) {

    if (this.no_more_post) {
      return;
    }

    this.page_no += 1;

    // console.log('event:', event);
    // console.log('page no:', this.page_no);

    this.a.postList(this.forumSettings, this.page_no, this.limit).subscribe(res => {
      // console.log(res);

      if (!res.length || res.length < this.limit) {
        this.no_more_post = true;
      }

      res.forEach(post => this.delayDisplay(post));
      if (event) {
        event.target.complete();
        event.target.disable = true;
      }
    });
  }

  delayDisplay(post: Post) {
    // console.log(post);
    post['commentInUpdate'] = null;
    post['replyTo'] = post.idx;
    post['safe_content'] = this.a.safeHtml(post.content);
    if (this.designType === 'gallery') {
      post.view = true;
    }
    this.posts.push(post);
  }

}


