import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCarsoulComponent } from './home-carsoul/home-carsoul.component';
import { SavesComponent } from './saves/saves.component';

const routes: Routes = [
  {path: 'what to cook' , component: HomeCarsoulComponent}
  // { path: 'saves', component: SavesComponent } 

];

@NgModule({ 
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
