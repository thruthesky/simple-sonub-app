import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

import {
  Platform,
  LoadingController
} from '@ionic/angular';

import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  apps: string[] = [];

  loading: any;
  destination: number[];
  options: LaunchNavigatorOptions = {};

  constructor(
    public a: AppService,
    private platform: Platform,
    public loadingCtrl: LoadingController,
    private launchNavigator: LaunchNavigator
  ) {
    this.destination = [a.mapLat, a.mapLng];
  }

  async ngOnInit() {
    await this.platform.ready();
    setTimeout(() => {
      this.init();
    }, 300);
  }

  init() {

  }

  navigate() {
    console.log(this.options);

    this.launchNavigator.navigate(this.destination, this.options)
      .then(
        success => alert('Launched navigator'),
        error => alert('Error launching navigator: ' + error)
      );
  }
}

