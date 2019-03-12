import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { imageTextTitles, cards, text, iconTexts } from './evieco-home.locale';

@Component({
  selector: 'app-evieco-home',
  templateUrl: './evieco-home.component.html',
  styleUrls: ['./evieco-home.component.scss']
})
export class EviecoHomeComponent implements OnInit {

  showIconLineNo = -1;
  text = text;
  imageTextTitles = imageTextTitles;
  cards = cards;

  iconTexts = iconTexts;

  constructor(
    public a: AppService
  ) { }

  ngOnInit() {
  }

  get lang(): string {
    return this.a.lib.getUserLanguage();
  }

}



