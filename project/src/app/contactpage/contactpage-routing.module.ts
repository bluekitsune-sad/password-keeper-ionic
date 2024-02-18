import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactpagePage } from './contactpage.page';

const routes: Routes = [
  {
    path: '',
    component: ContactpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactpagePageRoutingModule {}
