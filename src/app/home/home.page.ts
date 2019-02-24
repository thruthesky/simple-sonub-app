import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public a: AppService
  ) {

  }

}
