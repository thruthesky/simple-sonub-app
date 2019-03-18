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

  loadPage() {
    this.page_no += 1;

    this.a.postList(this.forumSettings, this.page_no).subscribe(res => {
      res.forEach(post => this.delayDisplay(post));
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


