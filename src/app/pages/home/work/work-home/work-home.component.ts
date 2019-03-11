import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { cards, imageTextTitles, text, iconTexts } from './work-home.locale';

@Component({
  selector: 'app-work-home',
  templateUrl: './work-home.component.html',
  styleUrls: ['./work-home.component.scss']
})



export class WorkHomeComponent implements OnInit {


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


