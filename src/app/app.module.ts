import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AppService } from './services/app.service';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ForumComponent } from './pages/forum/forum.component';
import { MapComponent } from './pages/map/map.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SettingComponent } from './pages/setting/setting.component';
import { SimplestModule } from 'modules/ng-simplest/simplest.module';
import { environment } from 'src/environments/environment';
import { AppSettings } from './services/app-settings.service';
import { PhilGoApiService } from 'modules/philgo-api/philgo-api.service';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { CommentListComponent } from './components/comment/comment-list/comment-list.component';
import { PostButtonsComponent } from './components/post-buttons/post-buttons.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { FooterToolbarComponent } from './components/footer-toolbar/footer-toolbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AppLibrary } from './services/app-library.service';
import { ImageTextComponent } from './components/image-text/image-text.component';
import { HomePage } from './pages/home/home.page';
import { WorkHomeComponent } from './pages/home/work/work-home/work-home.component';
import { EviecoHomeComponent } from './pages/home/evieco/evieco-home/evieco-home.component';
import { LasemaHomeComponent } from './pages/home/lasema/lasema-home/lasema-home.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { PopupMenuComponentModule } from './components/popup-menu/popup-menu.component.module';
import { CommentContentComponent } from './components/comment/comment-content/comment-content.component';
import { PostContentComponent } from './components/post/post-content/post-content.component';
import { PostHeaderComponent } from './components/post/post-header/post-header.component';
import { PostUserProfileComponent } from './components/post/post-user-profile/post-user-profile.component';
import { PostEditComponent } from './pages/post/post-edit/post-edit.component';
import { FileDisplayComponent } from './components/file-display/file-display.component';
import { CommentUserProfileComponent } from './components/comment/comment-user-profile/comment-user-profile.component';
import { CommentHeaderComponent } from './components/comment/comment-header/comment-header.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ForumComponent,
    MapComponent,
    ContactComponent,
    SettingComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,

    PostListComponent,
    PostEditComponent,
    PostHeaderComponent,
    PostContentComponent,
    PostUserProfileComponent,

    CommentListComponent,
    CommentContentComponent,
    PostButtonsComponent,
    CommentBoxComponent,
    CommentUserProfileComponent,
    CommentHeaderComponent,

    FooterToolbarComponent,
    SideMenuComponent,
    ImageTextComponent,
    FileDisplayComponent,

    HomePage,
    WorkHomeComponent,
    EviecoHomeComponent,
    LasemaHomeComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    PopupMenuComponentModule,
    SimplestModule.forRoot(environment.simplest)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppService,
    AppSettings,
    AppLibrary
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private philgo: PhilGoApiService) {
    philgo.setServerUrl(environment.philgo.url.webServer);
    philgo.setFileServerUrl(environment.philgo.url.fileServer);
  }
}

