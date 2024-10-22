
import { AboutComponent } from './modules/about-module/about/about.component';
import { RecipesComponent } from './modules/food-module/recipes/recipes.component';
import { CategoriesComponent } from './modules/food-module/recipes/categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeCarsoulComponent } from './home-carsoul/home-carsoul.component';
import { SavesComponent } from './modules/save-module/saves/saves.component';
import { ChefDetailsComponent } from './chef-details/chef-details.component';
import { SplashComponent } from './splash/splash.component';
import { ProfileComponent } from './modules/profile-module/profile/profile.component';


const routes: Routes = [
  { path: 'splash', component: SplashComponent },
  // { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  {path: 'what to cook' , component: HomeCarsoulComponent},
  {path: 'details', component:DetailsComponent},
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'chef/:id', component: ChefDetailsComponent },
  { path: 'about-module', loadChildren: () => import('./modules/about-module/about-module.module').then(m => m.AboutModuleModule) },
  { path: 'save-module', loadChildren: () => import('./modules/save-module/save-module.module').then(m => m.SaveModuleModule) },
  { path: 'food-module', loadChildren: () => import('./modules/food-module/food-module.module').then(m => m.FoodModuleModule) },
  { path: 'profile-module', loadChildren: () => import('./modules/profile-module/profile-module.module').then(m => m.ProfileModuleModule) },

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
