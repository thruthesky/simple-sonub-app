import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

import {
  Platform
} from '@ionic/angular';

import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  apps = [];
  modes = [];

  loading: any;
  destination: number[];
  options: LaunchNavigatorOptions = {
    app: this.launchNavigator.APP.WAZE,
    transportMode: ''
  };


  constructor(
    public a: AppService,
    private platform: Platform,
    public launchNavigator: LaunchNavigator
  ) {
    this.destination = [a.mapLat, a.mapLng];
  }

  async ngOnInit() {
    await this.platform.ready();
    setTimeout(() => {
      // this.init();
      //
      this.navigate();
    }, 300);
  }

  init() {

    /**
     * returns installed navigation app from the user's device
     */
    this.launchNavigator.availableApps().then(res => {
      Object.keys(res).map((key) => {
        if (res[key]) {
          this.apps.push({ 'app_name': key, 'value': res[key] });
        }
      });
    });

  }

  /**
   * open third party navigation app by user choice
   */
  navigate() {
    console.log(this.options);
    this.launchNavigator.navigate(this.destination, this.options)
      .then(
        success => alert('Launched navigator'),
        error => alert('Error launching navigator: ' + error)
      );
  }

  /**
   * detect platform
   */
  get userPlatform() {
    let platform = '';

    if (this.platform.is('android')) {
      platform = 'android';
    } else if (this.platform.is('ios')) {
      platform = 'ios';
    }

    return platform;
  }

  /**
   * still working on this one
   */
  get transportModes() {
    const modes = this.launchNavigator.getTransportModes(this.options.app, this.userPlatform);
    return modes;
  }

  consoletrans() {
    console.log(this.transportModes);
  }
}

