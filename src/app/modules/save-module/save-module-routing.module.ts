import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveModuleComponent } from './save-module.component';
import { SavesComponent } from './saves/saves.component';

const routes: Routes = [{ path: '', component: SaveModuleComponent, children:[
  {path:'', redirectTo:'saves', pathMatch:'full'},
  {path:'saves', component:SavesComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveModuleRoutingModule { }
