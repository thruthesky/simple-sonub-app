import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopupMenuComponent } from 'src/app/components/popup-menu/popup-menu.component';

@Injectable()
export class PopupService {

    constructor(
        private popoverController: PopoverController
    ) {

    }

    /**
     * Open popup menu
     *
     * @param context 'menu' | 'confirm'
     * @param mssg message string
     */
    async open(context: string, mssg?: string): Promise<any> {
        const popover = await this.popoverController.create({
            component: PopupMenuComponent,
            translucent: true,
            componentProps: {
                context: context,
                message: mssg
            }
        });
        popover.present();
        return await popover.onDidDismiss().then(ret => {
            return ret.data;
        });
    }
}
