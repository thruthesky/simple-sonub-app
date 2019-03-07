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

  thisYear = new Date().getFullYear().toString();
  minSelectableDate = +this.thisYear - 70 + '-00-01';
  maxSelectableDate = this.thisYear + '-00-01';

  constructor(
    public a: AppService
  ) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.a.sp.isLoggedIn) {
      this.a.sp.profile().subscribe(res => {
        Object.assign(this.form, res);

        // console.log('form: ', this.form);
      });
    }
  }

  onSubmit() {

    if (this.a.sp.isLoggedIn) {
      const data: User = {
        email: this.form.email,
        name: this.form.name,
        mobile: this.form.mobile,
        nickname: this.form.nickname,
        gender: this.form.gender,
        birthday: this.form.birthday
      };

      const inc = this.isIncomplete(data);
      if (inc) {
        return this.a.error(inc);

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
        name: this.form.name,
        mobile: this.form.mobile
      };

      const inc = this.isIncomplete(data);
      if (inc) {
        return this.a.error(inc);

      } else {
        this.a.sp.register(this.form).subscribe(res => {
          console.log('register', res);
          this.a.openProfile();
        }, e => this.a.error(e));
      }
    }
  }

  isIncomplete(data: Object) {
    let inc = '';
    Object.keys(data).forEach(k => {
      if (!data[k.trim()]) {
        inc += inc ? `, ${k}` : `Please fill up ${k}`;
      }
    });
    return inc ? `${inc}.` : false;
  }
}
