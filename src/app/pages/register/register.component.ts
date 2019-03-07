import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'modules/ng-simplest/simplest.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: User = {};

  constructor(
    public a: AppService
  ) {
    if (a.sp.isLoggedIn) {
      a.sp.profile().subscribe(res => {
        Object.assign(this.form, res);
      });
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.a.sp.isLoggedIn) {
      const data: User = {
        email: this.form.email,
        nickname: this.form.nickname,
        name: this.form.name,
        gender: this.form.gender,
        birthday: this.form.birthday,
        mobile: this.form.mobile
      };
      if (this.isIncomplete(data)) {
        return alert('Form must be complete');
      } else {
        this.a.sp.profileUpdate(data).subscribe(res => {
          console.log('update', res);
          Object.assign(this.form, res);
        }, e => this.a.error(e));
      }
    } else {
      const data: User = {
        email: this.form.email,
        password: this.form.password,
        name: this.form.password
      };
      if (this.isIncomplete(data)) {
        return alert('Form must be complete');
      } else {
        this.a.sp.register(this.form).subscribe(res => {
          console.log('register', res);
          this.a.openProfile();
        }, e => this.a.error(e));
      }
    }
  }

  isIncomplete(data: Object) {
    let ret = false;
    if (Object.keys(data).filter(k => !data[k]).length) {
      ret = true;
    }
    return ret;
  }
}
