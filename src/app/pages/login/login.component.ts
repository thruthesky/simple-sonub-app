import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data = {
    email: '',
    password: ''
  };

  constructor(
    public a: AppService
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    const inc = this.a.isIncomplete(this.data);
    if (inc) {
      return this.a.error(inc);
    } else {
      this.a.sp.login(this.data.email, this.data.password).subscribe(res => {
        this.a.openHome();
        this.a.philgoLoginOrRegister();
      }, e => this.a.error(e));
    }
  }
}
