import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkColumnDef } from '@angular/cdk/table';
import { IonicModule } from '@ionic/angular';
import {MatTableModule} from '@angular/material/table'
import { AcademicPageRoutingModule } from './academic-routing.module';

import { AcademicPage } from './academic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademicPageRoutingModule,
    MatTableModule
  ],
  providers:[CdkColumnDef],
  declarations: [AcademicPage]
})
export class AcademicPageModule {}
