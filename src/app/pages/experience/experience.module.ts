import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'
import { IonicModule } from '@ionic/angular';

import { ExperiencePageRoutingModule } from './experience-routing.module';

import { ExperiencePage } from './experience.page';
import { CdkColumnDef } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperiencePageRoutingModule,
    MatTableModule
  ],
  declarations: [ExperiencePage],
  providers:[CdkColumnDef]
})
export class ExperiencePageModule {}
