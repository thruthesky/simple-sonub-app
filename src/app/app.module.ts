import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SonubAppLibraryModule } from 'modules/sonub-app-library/sonub-app-library.module';
import { AppService } from './services/app.service';
import { HomePage } from './pages/home/home.page';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ForumComponent } from './pages/forum/forum.component';
import { MapComponent } from './pages/map/map.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SettingComponent } from './pages/setting/setting.component';
import { FormsModule } from '@angular/forms';
import { SimplestModule } from 'modules/ng-simplest/simplest.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    GalleryComponent,
    ForumComponent,
    MapComponent,
    ContactComponent,
    SettingComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SonubAppLibraryModule,
    SimplestModule.forRoot(environment.simplest)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

