import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider'
import { IonicModule } from '@ionic/angular';

import { PersonalProjectPageRoutingModule } from './personal-project-routing.module';
import {MatCardModule} from '@angular/material/card';
import { PersonalProjectPage } from './personal-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalProjectPageRoutingModule,
    MatCardModule,
    MatDividerModule
  ],
  declarations: [PersonalProjectPage]
})
export class PersonalProjectPageModule {}
