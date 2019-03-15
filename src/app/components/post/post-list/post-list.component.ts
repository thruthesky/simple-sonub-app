import { Component, OnInit, Input } from '@angular/core';
import { Posts, Post } from 'modules/ng-simplest/simplest.interface';
import { AppSettingForum } from 'src/app/services/interfaces';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';

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
  posts: Posts = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    public a: AppService
  ) {
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

  loadPage() {
    if (this.page_no === 1) {
      return;
    }

    this.page_no = 1;

    this.a.postList(this.forumSettings, this.page_no).subscribe(res => {
      // const arr = [];
      res.forEach(post => this.delayDisplay(post));

      // setTimeout(() => {

      // Object.assign(this.posts, arr);
      // }, 1000);


      // setTimeout(() => this.loaded = true, 2000);
    });
  }

  delayDisplay(post: Post) {
    if (!post.stamp_deleted || post.stamp_deleted === '0') {
      post['commentInUpdate'] = null;
      post['replyTo'] = post.idx;
      post['safe_content'] = this.a.safeHtml(post.content);
      if (this.designType === 'gallery') {
        post.view = true;
      }
      // arr.push(post);
      this.posts.push(post);
    }
  }

}


