import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { imageTextTitles, cards, text } from './evieco-home.locale';

@Component({
  selector: 'app-evieco-home',
  templateUrl: './evieco-home.component.html',
  styleUrls: ['./evieco-home.component.scss']
})
export class EviecoHomeComponent implements OnInit {

  text = text;
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



