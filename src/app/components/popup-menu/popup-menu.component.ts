import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'popup-menu',
    templateUrl: './popup-menu.component.html',
    styleUrls: ['./popup-menu.component.scss']
})
export class PopupMenuComponent implements OnInit, OnDestroy {


    message = '';

    constructor(
        private popoverController: PopoverController,
        private navParams: NavParams,
        public a: AppService
    ) { }

    ngOnInit() {
        this.message = this.navParams.data.message;
    }

    ngOnDestroy() {
        this.message = '';
    }

    async dismiss(action: string) {
        try {
            await this.popoverController.dismiss(action);
        } catch (e) {
        }

    }
}



