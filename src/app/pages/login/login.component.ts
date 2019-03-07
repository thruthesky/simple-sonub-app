import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  constructor(
    public a: AppService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    // console.log('submit');
    this.a.sp.login(this.email, this.password).subscribe(res => {
      // console.log('login success: ', res);
      this.a.openHome();
    }, e => this.a.error(e));
  }
}
