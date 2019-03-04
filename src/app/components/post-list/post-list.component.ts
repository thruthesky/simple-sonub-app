import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'modules/ng-simplest/simplest.interface';
import { AppSettingForum } from 'src/app/services/interfaces';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() forum: AppSettingForum;
  posts: Posts = [];
  constructor(
    public a: AppService
  ) {

  }

  ngOnInit() {
    this.a.postList(this.forum, 1).subscribe(res => {
      // console.log('PostListComponent::ngOnInit() res:', res);
      this.posts = res;
      this.posts.forEach(post => post['safe_content'] = this.a.safeHtml(post.content));
    });
  }



}


