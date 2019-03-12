import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  idx_category: string;

  constructor(
    public a: AppService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.queryParamMap.subscribe(params => {
      this.idx_category = this.a.settings.site.footerMenus[params.get('i')].idx_category;
    });
  }

  ngOnInit() {
  }

  openPostCreate() {
    this.router.navigate(['/post/edit'], { queryParams: { action: 'create', category: this.idx_category } });
  }

}



