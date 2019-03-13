import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(
    public a: AppService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  get lang(): string {
    return this.a.lib.getUserLanguage();
  }
  set lang(code) {
    this.a.lib.setUserLanguage(code);
    this.navCtrl.navigateRoot('/setting/lang');
  }

}


