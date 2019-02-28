import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
export class MapComponent implements OnInit {

  @ViewChild('map_canvas') map_canvas: ElementRef;
  map: GoogleMap;
  loading: any;

  destination: number[];
  options: LaunchNavigatorOptions = {
    // app: will be user selection if waze and google maps are not available
    // transportMode: will be `driving` in defauld if not specified
  };
  installedNavigationApps: Array<string> = [];


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
      this.loadMap();
      console.log('OnInit');
    }, 300); // timeout is necessary here.
  }

  loadMap() {
    /**
     * @description
     *  `launchNavigator.availableApps` returns a list of supported apps for the current user's device with a boolean value
     *    determining if it is installed or not.
     *
     * @return format
     *  {
     *    'google_maps' : true,
     *    'waze' : false,
     *     ...
     *  }
     *
     * @note
     *  - if a user's phone doesn't have any navigation app installed, falling back to user_select will not work
     *      and the app will simply not show the selection box for navigation apps (because there is none).
     *
     *  - if that's the case, then this will also check if navigation apps supported by the `launch navigator` plugin is installed,
     *      and if there's none installed from the list, we just simply notify the user to install a navigation app to continue.
     *
     * for the list of supported apps for android and iOs :
     * @see https://github.com/dpa99c/phonegap-launch-navigator#app
     */
    this.launchNavigator.availableApps().then(apps => {
      Object.keys(apps).forEach(app => {
        if (apps[app]) {
          this.installedNavigationApps.push(app);

          if (app === this.launchNavigator.APP.GOOGLE_MAPS) {
            this.options.app = this.launchNavigator.APP.GOOGLE_MAPS;
          } else if (app === this.launchNavigator.APP.WAZE) {
            this.options.app = this.launchNavigator.APP.WAZE;
          } else {
            this.options.app = this.launchNavigator.APP.USER_SELECT;
          }
        }
      });
    });

    // plot map to canvas
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

    // add a marker to our destination
    const marker: Marker = this.map.addMarkerSync({
      title: this.a.t(this.a.settings.mapTitle),
      snippet: this.a.t(this.a.settings.mapSnippet),
      position: {
        lat: this.a.settings.mapLat,
        lng: this.a.settings.mapLng
      },
      animation: GoogleMapsAnimation.BOUNCE
    });

    // show marker info
    marker.showInfoWindow();
  }

  onClickDirections() {

    console.log(this.installedNavigationApps, this.options);

    if (!this.installedNavigationApps.length) {
      return alert('Please install a navigation app to continue');
    }

    this.launchNavigator.navigate(this.destination, this.options)
      .then(
        success => alert('Launched navigator'),
        error => alert('Error launching navigator: ' + error)
      );
  }

  /**
   * tests
   *
   * Android :
   *  5.1 - done, working
   *    @todo - ERROR `net::ERR_CACHE_MISS` (gallery tab)
   *  7.0 - done, working
   *
   * iOs :
   *  N/A
   *
   */
}

