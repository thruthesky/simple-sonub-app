import { NgModule } from '@angular/core';
import { PopupMenuComponent } from './popup-menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [PopupMenuComponent],
    imports: [IonicModule.forRoot()],
    exports: [PopupMenuComponent],
    entryComponents: [PopupMenuComponent]
})

export class PopupMenuComponentModule { }
