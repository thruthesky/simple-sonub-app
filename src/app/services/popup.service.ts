import { Injectable } from '@angular/core';
import { PopupMenuComponent } from '../components/popup-menu/popup-menu.component';
import { PopoverController } from '@ionic/angular';

@Injectable()


export class PopupService {

    constructor(private popoverController: PopoverController) {
    }

    async openPopupMenu(message: string, ev?: any): Promise<any> {
        const popover = await this.popoverController.create({
            component: PopupMenuComponent,
            event: ev,
            componentProps: {
                'message': message
            },
            translucent: true
        });
        popover.onDidDismiss().then(ret => {
            console.log(ret);
        })
        return await popover.present();
    }
}
