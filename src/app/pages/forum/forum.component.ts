import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { AppSettingForum } from 'src/app/services/interfaces';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  forumSetting: AppSettingForum;

  constructor(
    public a: AppService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.queryParamMap.subscribe(params => {
      this.forumSetting = a.forumSetting(params.get('i'));
    });
  }

  ngOnInit() {
  }
}



