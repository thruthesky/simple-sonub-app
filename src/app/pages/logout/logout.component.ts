import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit, OnDestroy {

  timer = null;
  constructor(public a: AppService) {
    this.a.sp.logout();
    this.a.philgo.logout();
  }

  ngOnInit() {
    this.timer = setTimeout(() => this.a.openHome(), 6000);
  }

  ngOnDestroy() {
    this.killTimer();
  }

  ionViewWillLeave() {
    this.killTimer();
  }

  killTimer() {
    if (this.timer) {
      // console.log('timer killed: ', this.timer);
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

}

