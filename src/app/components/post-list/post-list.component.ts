import { Component, OnInit } from '@angular/core';
import { Posts } from 'modules/ng-simplest/simplest.interface';
import { AppSettingForum } from 'src/app/services/interfaces';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  forum: AppSettingForum;
  posts: Posts = [];
  constructor(
    activatedRoute: ActivatedRoute,
    public a: AppService
  ) {
    activatedRoute.queryParamMap.subscribe(params => {
      this.forum = this.a.settings.site.footerMenus[params.get('i')];
      this.loadPage();
    });
  }

  ngOnInit() {
  }


  loadPage() {
    this.a.postList(this.forum, 1).subscribe(res => {
      this.posts = res;
      this.posts.forEach(post => post['safe_content'] = this.a.safeHtml(post.content));
    });
  }


}


