import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalProjectPage } from './personal-project.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalProjectPageRoutingModule {}
