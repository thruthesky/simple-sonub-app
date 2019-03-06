import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'modules/ng-simplest/simplest.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = <any>{};

  constructor(
    public a: AppService
  ) {
    if (a.sp.isLoggedIn) {
      a.sp.profile().subscribe(res => {
        Object.assign(this.user, res);
      });
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);

    if (this.user.idx) {

      const data: User = {
        email: this.user.email,
        nickname: this.user.nickname,
        name: this.user.name,
        gender: this.user.gender,
        birthday: this.user.birthday,
        mobile: this.user.mobile
      };

      this.a.sp.profileUpdate(data).subscribe(res => {
        console.log('update', res);

        Object.assign(this.user, res);
      }, e => this.a.error(e));
    } else {
      this.a.sp.register(this.user).subscribe(res => {
        console.log('register', res);

        this.a.openProfile();
      }, e => this.a.error(e));
    }
  }

}
