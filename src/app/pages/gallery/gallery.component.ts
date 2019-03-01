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
  }

  ngOnInit() {
  }

}
