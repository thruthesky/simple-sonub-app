import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'app-post-edit',
    templateUrl: './post-edit.component.html',
    styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

    constructor(
        public a: AppService
    ) {

    }

    ngOnInit() {
    }

}


