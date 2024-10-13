import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCarsoulComponent } from './home-carsoul/home-carsoul.component';
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CategoriesComponent } from './recipes/categories/categories.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'', redirectTo:'what to cook', pathMatch: 'full'},
  {path: 'what to cook' , component: HomeCarsoulComponent},
  {path: 'recipes', component:RecipesComponent},
  {path: 'about', component:AboutComponent},
  {path: 'categories', component:CategoriesComponent},
  {path: 'details', component:DetailsComponent},
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
