import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ForumComponent } from './pages/forum/forum.component';
import { MapComponent } from './pages/map/map.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SettingComponent } from './pages/setting/setting.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PostViewComponent } from './pages/post/post-view/post-view.component';
import { PostEditComponent } from './pages/post/post-edit/post-edit.component';


const routes: Routes = [
  { path: '', redirectTo: environment.firstPageRoute, pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'map', component: MapComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'setting/lang', component: SettingComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'post/view', component: PostViewComponent },
  { path: 'post/edit', component: PostEditComponent },
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


