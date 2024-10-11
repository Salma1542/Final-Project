import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCarsoulComponent } from './home-carsoul/home-carsoul.component';

const routes: Routes = [
  {path: 'home' , component: HomeCarsoulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
