import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosCliPageRoutingModule } from './datos-cli-routing.module';

import { DatosCliPage } from './datos-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosCliPageRoutingModule
  ],
  declarations: [DatosCliPage]
})
export class DatosCliPageModule {}
