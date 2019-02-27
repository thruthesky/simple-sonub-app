import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

import {
  Platform
} from '@ionic/angular';
<<<<<<< HEAD

import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
=======
import {
  GoogleMaps,
  GoogleMap,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
>>>>>>> master


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
<<<<<<< HEAD
    public launchNavigator: LaunchNavigator
  ) {
    this.destination = [a.mapLat, a.mapLng];
=======
    public a: AppService
  ) { }

  /**
   * @todo see if waze is installed. or use google map for launching navigator.
   * if both of them are not installed, let user to choose navigator.
   */
  ngOnInit() {
>>>>>>> master
  }

  async ngOnInit() {
    await this.platform.ready();
    setTimeout(() => {
      // this.init();
      //
      this.navigate();
    }, 300);
  }

<<<<<<< HEAD
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
=======
  loadMap() {
    console.log('canvas: ', this.map_canvas);
    this.map = GoogleMaps.create(this.map_canvas.nativeElement, {
      camera: {
        target: {
          lat: this.a.settings.mapLat,
          lng: this.a.settings.mapLng
        },
        zoom: 18,
        tilt: 30
      }
    });

    // add a marker
    const marker: Marker = this.map.addMarkerSync({
      title: this.a.t(this.a.settings.mapTitle),
      snippet: this.a.t(this.a.settings.mapSnippet),
      position: {
        lat: this.a.settings.mapLat,
        lng: this.a.settings.mapLng
      },
      animation: GoogleMapsAnimation.BOUNCE
>>>>>>> master
    });

  }

<<<<<<< HEAD
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
=======
  async onClickDirections() {
    this.map.clear();

    alert('show directions');
>>>>>>> master
  }

  consoletrans() {
    console.log(this.transportModes);
  }
}

