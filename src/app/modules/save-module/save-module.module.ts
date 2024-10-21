import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveModuleRoutingModule } from './save-module-routing.module';
import { SaveModuleComponent } from './save-module.component';
import { SavesComponent } from './saves/saves.component';


@NgModule({
  declarations: [
    SaveModuleComponent,
    SavesComponent,
  ],
  imports: [
    CommonModule,
    SaveModuleRoutingModule
  ]
})
export class SaveModuleModule { }
