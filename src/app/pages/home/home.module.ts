import { NgModule } from '@angular/core';

import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LasemaHomeComponent } from './lasema/lasema-home/lasema-home.component';
import { EviecoHomeComponent } from './evieco/evieco-home/evieco-home.component';
import { WorkHomeComponent } from './work/work-home/work-home.component';

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
        WorkHomeComponent,
        LasemaHomeComponent,
        EviecoHomeComponent
    ],
    providers: [],
})
export class HomeModule { }

