import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitePage } from './site.page';

const routes: Routes = [
  {
    path: '',
    component: SitePage
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitePageRoutingModule {}
