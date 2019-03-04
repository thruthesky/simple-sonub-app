import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { ErrorObject } from 'modules/ng-simplest/simplest.interface';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    email = '';
    password = '';

    constructor(
        public a: AppService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onSubmit() {
        this.a.sp.login(this.email, this.password).subscribe(res => {

            this.router.navigateByUrl('/gallery');

        }, (e: ErrorObject) => alert(e.error_message));
    }

}

