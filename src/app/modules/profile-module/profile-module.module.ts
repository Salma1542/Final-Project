import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModuleRoutingModule } from './profile-module-routing.module';
import { ProfileModuleComponent } from './profile-module.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    ProfileModuleComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileModuleRoutingModule
  ]
})
export class ProfileModuleModule { }
