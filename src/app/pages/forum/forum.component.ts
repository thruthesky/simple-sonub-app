import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(
    public a: AppService
  ) {
    this.a.sp.postQuery({
      fields: '*',
      where: `taxonomy='sites' AND relation=${this.a.settings.siteIdx} AND access_code IS NULL`,
      limit: '10',
      orderby: 'idx desc'
    }).subscribe(res => {
      console.log('forum: post.query: ', res);
    }, e => console.error(e));
  }

  ngOnInit() {
  }

}



