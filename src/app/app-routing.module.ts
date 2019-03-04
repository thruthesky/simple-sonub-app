import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ForumComponent } from './pages/forum/forum.component';
import { MapComponent } from './pages/map/map.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SettingComponent } from './pages/setting/setting.component';
import { LoginComponent } from './pages/login/login.component';
import { environment } from 'src/environments/environment';


const routes: Routes = [
  { path: '', redirectTo: environment.firstPageRoute, pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'gallery', component: GalleryComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'map', component: MapComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'setting/lang', component: SettingComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


