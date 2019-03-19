import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { AppContact, AppSettingFooterMenu } from 'src/app/services/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  forumIndex: string;
  forumSetting: AppSettingFooterMenu;
  title = '...';
  constructor(
    public activatedRoute: ActivatedRoute,
    public a: AppService
  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.title = this.a.t('contact');
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.forumIndex = params.get('i');
      this.forumSetting = this.a.forumSetting(params.get('i'));
      if (this.forumSetting.pageTitle) {
        this.title = this.forumSetting.pageTitle;
      }
    });
  }

  onClickContact(item: AppContact) {
    console.log('contact item: ', item);
  }

}


