
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CategoriesComponent } from './recipes/categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeCarsoulComponent } from './home-carsoul/home-carsoul.component';
import { SavesComponent } from './saves/saves.component';
import { ChefDetailsComponent } from './chef-details/chef-details.component';
import { SplashComponent } from './splash/splash.component';


const routes: Routes = [
  { path: 'splash', component: SplashComponent },
  { path: '', redirectTo: '/splash', pathMatch: 'full' }, 
  {path: 'what to cook' , component: HomeCarsoulComponent},
  {path: 'recipes', component:RecipesComponent},
  {path: 'about', component:AboutComponent},
  {path: 'categories', component:CategoriesComponent},
  {path: 'details', component:DetailsComponent},
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'saves', component: SavesComponent } ,
  { path: 'chef/:id', component: ChefDetailsComponent },
  { path: 'category/:name', component: RecipesComponent },

];

@NgModule({ 
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
