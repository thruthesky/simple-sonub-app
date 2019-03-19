import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { AppSettingFooterMenu } from 'src/app/services/interfaces';
import { PostListComponent } from 'src/app/components/post/post-list/post-list.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit, AfterViewInit {

  @ViewChild('appPostList') appPostList: PostListComponent;
  forumIndex: string;
  forumSetting: AppSettingFooterMenu;
  title = '...';
  constructor(
    public a: AppService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.title = this.a.t("forum");
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.forumIndex = params.get('i');
      this.forumSetting = this.a.forumSetting(params.get('i'));
      if (this.forumSetting.pageTitle) {
        this.title = this.forumSetting.pageTitle;
      }
      this.appPostList.doInit();
    });
  }

  ngAfterViewInit() {
  }
}



