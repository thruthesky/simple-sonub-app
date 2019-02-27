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
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  map: GoogleMap;
  loading: any;

  @ViewChild('map_canvas') map_canvas: ElementRef;
  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform,
    public a: AppService
  ) { }

  /**
   * @todo see if waze is installed. or use google map for launching navigator.
   * if both of them are not installed, let user to choose navigator.
   */
  ngOnInit() {
  }


  async ngAfterViewInit() {
    await this.platform.ready();
    setTimeout(() => {
      this.loadMap();
    }, 300);

  }

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
    });
    marker.showInfoWindow();

  }

  async onClickDirections() {
    this.map.clear();

    alert('show directions');
  }

}

