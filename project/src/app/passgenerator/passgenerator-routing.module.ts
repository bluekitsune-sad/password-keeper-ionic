import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassgeneratorPage } from './passgenerator.page';

const routes: Routes = [
  {
    path: '',
    component: PassgeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassgeneratorPageRoutingModule {}
