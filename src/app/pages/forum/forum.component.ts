import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppSettingForum } from 'src/app/services/interfaces';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  // idx_category: string;
  forumSetting: AppSettingForum;

  constructor(
    public a: AppService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.queryParamMap.subscribe(params => {
      // this.idx_category = this.a.settings.site.footerMenus[params.get('i')].idx_category;
      this.forumSetting = a.forumSetting(params.get('i'));
    });
  }

  ngOnInit() {
  }

  openPostCreate() {
    this.router.navigate(['/post/edit'], { queryParams: { action: 'create', category: this.forumSetting.idx_category } });
  }

}



