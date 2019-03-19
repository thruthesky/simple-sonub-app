import { Component, ViewChild } from '@angular/core';

import { Platform, IonRouterOutlet, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toast: ToastController,
    public a: AppService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // console.log('is cordova?: ', this.platform.is('cordova'));
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.platform.backButton.subscribe(async () => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
      } else {
        if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
          navigator['app'].exitApp(); // work in ionic 4
        } else {
          const toast = await this.toast.create({
            message: 'Press back button again to exit App',
            showCloseButton: true,
            position: 'top',
            closeButtonText: 'Done',
            duration: 2000
          });
          toast.present();
          this.lastTimeBackPress = new Date().getTime();
        }
      }
    });


    console.log('env: ', this.a.env);
  }
}
