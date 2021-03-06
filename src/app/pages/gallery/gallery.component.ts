import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import * as yaml from 'js-yaml';
import { AppSettingFooterMenu } from 'src/app/services/interfaces';
import { PostListComponent } from 'src/app/components/post/post-list/post-list.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  @ViewChild('appPostList') appPostList: PostListComponent;
  forumIndex: string;
  forumSetting: AppSettingFooterMenu;
  title = '...';

  constructor(
    private activatedRoute: ActivatedRoute,
    public a: AppService
  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.title = this.a.t('gallery');
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.forumIndex = params.get('i');
      this.forumSetting = this.a.forumSetting(params.get('i'));
      if (this.forumSetting.pageTitle) {
        this.title = this.forumSetting.pageTitle;
      }
      this.appPostList.doInit();
    });
  }

  openPostEdit() {
    return this.a.openPostEdit(
      'create',
      this.forumIndex,
      this.forumSetting.idx_category
        ? this.forumSetting.idx_category
        : this.forumSetting.category,
      this.forumSetting.post_id);
  }
}
