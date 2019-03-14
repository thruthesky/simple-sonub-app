import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { File } from 'modules/ng-simplest/simplest.interface';

@Component({
    selector: 'app-file-display',
    templateUrl: './file-display.component.html',
    styleUrls: ['./file-display.component.scss']
})
export class FileDisplayComponent implements OnInit {

    @Input() files: File[];

    constructor(
        public a: AppService
    ) {

    }

    ngOnInit() {
    }

}
