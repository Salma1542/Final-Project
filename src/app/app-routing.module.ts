import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCarsoulComponent } from './home-carsoul/home-carsoul.component';
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'', redirectTo:'recipes', pathMatch:'full'},
  {path: 'recipes', component:RecipesComponent},
  {path: 'what to cook' , component: HomeCarsoulComponent},
  {path: 'about', component:AboutComponent},
  {path: 'details', component:DetailsComponent},
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
