import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  MarkerCluster
} from '@ionic-native/google-maps';


interface ILatLng {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  map: GoogleMap;
  loading: any;
  destination: ILatLng = null;

  @ViewChild('map_canvas') map_canvas: ElementRef;
  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform,
    public a: AppService
  ) {
    this.destination = { lat: a.mapLat, lng: a.mapLng };
  }

  ngOnInit() {
  }


  async ngAfterViewInit() {
    await this.platform.ready();
    setTimeout(() => {
      this.loadMap();
    }, 300);

  }

  loadMap() {
    // console.log('canvas: ', this.map_canvas);
    this.map = GoogleMaps.create(this.map_canvas.nativeElement, {
      camera: {
        target: this.destination,
        zoom: 18,
        tilt: 30
      }
    });

    // add a marker
    const marker: Marker = this.map.addMarkerSync({
      title: this.a.t(this.a.mapTitle),
      snippet: this.a.t(this.a.mapSnippet),
      position: this.destination,
      animation: GoogleMapsAnimation.BOUNCE
    });
    marker.showInfoWindow();

  }

  async onButtonClick() {
    // this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: this.a.t('wait to find my position')
    });
    await this.loading.present();

    /**
     * get device current location
     */
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      // console.log(JSON.stringify(location, null, 2));

      /**
       * locations
       */
      const locations = [
        location.latLng,
        this.destination
      ];

      /**
       * add both location markers and click event listeners
       */
      const markerCluster: MarkerCluster = this.map.addMarkerClusterSync({
        boundsDraw: false,
        markers: this.dummyData(locations),
        icons: [] // error when removed
      });

      markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe(loc => {
        // show details and zoom in too
        console.log(loc);
      });

      /**
       * Zoom out camera to show both location
       */
      this.map.animateCamera({
        target: locations,
        padding: 75
      });

      // do tracking load to get there.

      // add a marker
      // const marker: Marker = this.map.addMarkerSync({
      //   title: '@ionic-native/google-maps plugin!',
      //   snippet: 'This plugin is awesome!',
      //   position: location.latLng,
      //   animation: GoogleMapsAnimation.BOUNCE
      // });

      // // show the infoWindow
      // marker.showInfoWindow();

      // If clicked it, display the alert
      // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      //   this.showToast('clicked!');
      // });
    })
      .catch(err => {
        this.loading.dismiss();
        this.showToast(err.error_message);
      });
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  dummyData(locations: ILatLng[]) {
    return [
      {
        'position': { 'lat': locations[0].lat, 'lng': locations[0].lng },
        'name': 'You Are Here'
      },
      {
        'position': { 'lat': locations[1].lat, 'lng': locations[1].lng },
        'name': 'Destination'
      }
    ];
  }

}

