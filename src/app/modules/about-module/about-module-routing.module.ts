import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModuleComponent } from './about-module.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{ path: '', component: AboutModuleComponent, children:[
  {path:'', redirectTo:'about', pathMatch:'full'},
  {path:'about', component:AboutComponent}
]

 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutModuleRoutingModule { }
