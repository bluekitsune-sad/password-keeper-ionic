import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassgeneratorPageRoutingModule } from './passgenerator-routing.module';

import { PassgeneratorPage } from './passgenerator.page';

import { StrengthLevelComponent } from '../components/strength-level/strength-level.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassgeneratorPageRoutingModule,
  ],
  declarations: [PassgeneratorPage,StrengthLevelComponent]
})
export class PassgeneratorPageModule {}
