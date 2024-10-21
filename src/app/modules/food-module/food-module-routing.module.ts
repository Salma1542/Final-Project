import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodModuleComponent } from './food-module.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CategoriesComponent } from './recipes/categories/categories.component';

const routes: Routes = [{ path: '', component: FoodModuleComponent, children:[
  // {path:'', redirectTo:'', pathMatch:'full'},
  {path:'recipes', component:RecipesComponent},
  {path:'categories', component:CategoriesComponent},
  { path: 'category/:name', component: RecipesComponent },

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodModuleRoutingModule { }
