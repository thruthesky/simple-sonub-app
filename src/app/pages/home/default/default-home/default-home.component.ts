import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss']
})



export class DefaultHomeComponent implements OnInit {

  icon_label = { en: 'Label', ko: '상표', ch: '标签', jp: 'ラベル' };
  title = { en: 'Title', ko: '표제', ch: '标题', jp: 'タイトル' };
  content = {
    en: 'Life has many ups and downs. It can be a bumpy ride. How you handle it, you decide!',
    ko: '인생에는 많은 기복이 있습니다. 울퉁불퉁 한 탈 수 있습니다. 당신이 그것을 어떻게 다루는 지, 당신은 결정합니다!',
    ch: '生活有很多起伏。这可能是一个坎坷的旅程，你决定如何处理它！',
    jp: '人生には多くの浮き沈みがあります。それはでこぼこの乗車になることができます、どのようにそれを処理する、あなたは決めます！'
  };

  constructor(
    public a: AppService
  ) { }

  ngOnInit() {
  }

  get lang(): string {
    return this.a.lib.getUserLanguage();
  }

}

