import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'popup-menu',
    templateUrl: './popup-menu.component.html',
    styleUrls: ['./popup-menu.component.scss']
})
export class PopupMenuComponent implements OnInit {

    constructor(
        public a: AppService,
        private popoverController: PopoverController
        // private navParams: NavParams
    ) { }

    ngOnInit() {
    }

    async dismiss(action: string) {
        try {
            await this.popoverController.dismiss(action);
        } catch (e) {
        }

    }
}



