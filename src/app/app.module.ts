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
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ForumComponent } from './pages/forum/forum.component';
import { MapComponent } from './pages/map/map.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SettingComponent } from './pages/setting/setting.component';
import { SimplestModule } from 'modules/ng-simplest/simplest.module';
import { environment } from 'src/environments/environment';
import { AppSettings } from './services/app.settings';
import { PhilGoApiService } from 'modules/philgo-api/philgo-api.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { PostButtonsComponent } from './components/post-buttons/post-buttons.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './pages/home/home.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogoutComponent } from './pages/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ForumComponent,
    MapComponent,
    ContactComponent,
    SettingComponent,
    PostListComponent,
    CommentListComponent,
    PostButtonsComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SonubAppLibraryModule,
    SimplestModule.forRoot(environment.simplest),
    HomeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppService,
    AppSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private philgo: PhilGoApiService) {
    philgo.setServerUrl(environment.philgo.url.webServer);
    philgo.setFileServerUrl(environment.philgo.url.fileServer);
  }
}

