import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupMenuComponent } from './popup-menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [PopupMenuComponent],
    imports: [CommonModule, IonicModule.forRoot()],
    exports: [PopupMenuComponent],
    entryComponents: [PopupMenuComponent]
})

export class PopupMenuComponentModule { }
