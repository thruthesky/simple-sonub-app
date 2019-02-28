import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

import * as yaml from 'js-yaml';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(
    public a: AppService
  ) {

    a.sp.postQuery({
      fields: '*',
      where: `taxonomy='sites' AND relation=${a.settings.siteIdx} AND access_code LIKE 'gallery-%'`,
      limit: '10',
      orderby: 'access_code asc'
    }).subscribe(res => {
      // console.log('post.query: ', res);
      a.settings.gallery = [];
      for (const p of res) {
        try {
          const doc = yaml.safeLoad(p['content']);
          // console.log('doc: ', doc);
          if (p['files'] && p['files'].length) {
            doc['photoUrl'] = p['files'][0]['url'];
          }
          a.settings.gallery.push(doc);
        } catch (e) {
          console.error(e);
        }
      }
    }, e => console.error(e));

  }

  ngOnInit() {
  }

}
