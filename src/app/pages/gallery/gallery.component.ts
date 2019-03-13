import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import * as yaml from 'js-yaml';
import { AppSettingForum } from 'src/app/services/interfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  forumSetting: AppSettingForum;

  constructor(
    activatedRoute: ActivatedRoute,
    public a: AppService
  ) {
    activatedRoute.queryParamMap.subscribe(params => {
      this.forumSetting = a.forumSetting(params.get('i'));
    });
  }

  ngOnInit() {
  }

}
