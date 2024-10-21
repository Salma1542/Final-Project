import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModuleRoutingModule } from './about-module-routing.module';
import { AboutModuleComponent } from './about-module.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AboutModuleComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    AboutModuleRoutingModule
  ]
})
export class AboutModuleModule { }
