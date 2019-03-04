import { NgModule } from '@angular/core';

import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LasemaHomeComponent } from './lasema/lasema-home/lasema-home.component';
import { EviecoHomeComponent } from './evieco/evieco-home/evieco-home.component';
import { DefaultHomeComponent } from './default/default-home/default-home.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        HomePage
    ],
    declarations: [
        HomePage,
        DefaultHomeComponent,
        LasemaHomeComponent,
        EviecoHomeComponent
    ],
    providers: [],
})
export class HomeModule { }

