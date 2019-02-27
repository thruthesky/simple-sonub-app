import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  Marker,
  GoogleMapsAnimation
} from '@ionic-native/google-maps';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('map_canvas') map_canvas: ElementRef;
  map: GoogleMap;
  loading: any;

  apps = [];

  destination: number[];
  options: LaunchNavigatorOptions = {
    // app: will be user selection if waze and google maps are not available
    // transportMode: will be `driving` in defauld if not specified
  };


  constructor(
    public a: AppService,
    private platform: Platform,
    public launchNavigator: LaunchNavigator
  ) {
    this.destination = [a.settings.mapLat, a.settings.mapLng];
  }

  async ngOnInit() {
    await this.platform.ready();
    setTimeout(() => {
      this.init();
    }, 300);
  }


  async ngAfterViewInit() {
    await this.platform.ready();
    setTimeout(() => this.loadMap(), 300); // timeout is necessary here.
  }

  init() {
    /**
     * returns installed navigation app from the user's device
     */
    this.launchNavigator.availableApps().then(res => {
      Object.keys(res).map((key) => {
        /**
         * check if waze is available then options.app will be waze if not, google maps
         */
        if (res[key]) {
          if (key === this.launchNavigator.APP.WAZE) {
            this.options.app = this.launchNavigator.APP.WAZE;
          } else if (key === this.launchNavigator.APP.GOOGLE_MAPS) {
            this.options.app = this.launchNavigator.APP.GOOGLE_MAPS;
          } else {
            this.options.app = '';
          }
        }
      });
      console.log(this.options);
    });
  }


  loadMap() {
    // console.log('canvas: ', this.map_canvas);
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
    });

    marker.showInfoWindow();
  }

  onClickDirections() {
    // for testing purposes
    // this.options.app = '';

    this.launchNavigator.navigate(this.destination, this.options)
      .then(
        success => alert('Launched navigator'),
        error => alert('Error launching navigator: ' + error)
      );
  }

}

