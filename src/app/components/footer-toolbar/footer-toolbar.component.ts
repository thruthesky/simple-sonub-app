import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppSettingFooterMenu } from 'src/app/services/interfaces';


@Component({
  selector: 'app-footer-toolbar',
  templateUrl: './footer-toolbar.component.html',
  styleUrls: ['./footer-toolbar.component.scss']
})
export class FooterToolbarComponent implements OnInit {


  @Input() menus: AppSettingFooterMenu[] = [
    {
      title: { en: 'Home' },
      icon: 'home',
      url: '/'
    },
    {
      title: { en: 'Gallery' },
      icon: 'photos',
      url: '/'
    },
    {
      title: { en: 'Forum' },
      icon: 'comments',
      url: '/'
    },
    {
      title: { en: 'Contact', ko: '연락처' },
      icon: 'contact',
      url: '/'
    },
    {
      title: { en: 'Help', ko: '도움말' },
      icon: 'help',
      url: '/'
    },
    {
      title: { en: 'Mneu', ko: '메뉴' },
      icon: 'menu',
      url: '/',
      openSideMenu: true
    }
  ];
  constructor(
    private router: Router,
    private menuController: MenuController,
    public a: AppService
  ) { }

  ngOnInit() {
  }


  onClick(menu: AppSettingFooterMenu, i: string) {
    // console.log('menu click on', this.menu);
    if (menu.openSideMenu) {
      this.menuController.open();
    } else {
      // this.router.navigate([menu.url], { queryParams: { i: i } });
      this.a.openTab(menu.url, i);
    }
  }
}


