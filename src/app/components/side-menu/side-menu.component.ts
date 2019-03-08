import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { AppSettingSideMenu } from 'src/app/services/interfaces';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() contentId = '';
  constructor(
    private router: Router,
    public a: AppService
  ) {
  }

  ngOnInit() {
  }

  onClick(menu: AppSettingSideMenu) {
    if (menu.close) {
    } else if (menu.openWindow) {
      window.open(menu.url, '_blank');
    } else {
      this.router.navigateByUrl(menu.url);
    }

  }
}


