import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactpagePageRoutingModule } from './contactpage-routing.module';

import { ContactpagePage } from './contactpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactpagePageRoutingModule
  ],
  declarations: [ContactpagePage]
})
export class ContactpagePageModule {}
