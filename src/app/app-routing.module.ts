import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./pages/experience/experience.module').then( m => m.ExperiencePageModule)
  },
  {
    path: 'academic',
    loadChildren: () => import('./pages/academic/academic.module').then( m => m.AcademicPageModule)
  },
  {
    path: 'personal-project',
    loadChildren: () => import('./pages/personal-project/personal-project.module').then( m => m.PersonalProjectPageModule)
  },
  {
    path: 'certifications',
    loadChildren: () => import('./pages/certifications/certifications.module').then( m => m.CertificationsPageModule)
  },
  {
    path: 'awards',
    loadChildren: () => import('./pages/awards/awards.module').then( m => m.AwardsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
