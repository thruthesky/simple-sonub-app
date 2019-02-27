import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  loading: any;
  destination: number[];
  options: LaunchNavigatorOptions = {};

  constructor(
    public a: AppService,
    private launchNavigator: LaunchNavigator
  ) {
    this.destination = [a.mapLat, a.mapLng];
  }

  ngOnInit() {
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

