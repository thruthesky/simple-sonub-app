import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { cards, imageTextTitles } from './work-home.locale';

@Component({
  selector: 'app-work-home',
  templateUrl: './work-home.component.html',
  styleUrls: ['./work-home.component.scss']
})



export class WorkHomeComponent implements OnInit {

  imageTextTitles = imageTextTitles;

  cards = cards;

  constructor(
    public a: AppService
  ) { }

  ngOnInit() {
  }

  get lang(): string {
    return this.a.lib.getUserLanguage();
  }

}


