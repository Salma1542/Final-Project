import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModuleComponent } from './profile-module.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{ path: '', component: ProfileModuleComponent, children:[
  {path:'',redirectTo:'profile',pathMatch:'full'},
  {path:'profile',component:ProfileComponent}
]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileModuleRoutingModule { }
