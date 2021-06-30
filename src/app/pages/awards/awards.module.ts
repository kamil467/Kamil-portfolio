import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwardsPageRoutingModule } from './awards-routing.module';

import { AwardsPage } from './awards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwardsPageRoutingModule
  ],
  declarations: [AwardsPage]
})
export class AwardsPageModule {}
