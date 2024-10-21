import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodModuleRoutingModule } from './food-module-routing.module';
import { FoodModuleComponent } from './food-module.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CategoriesComponent } from './recipes/categories/categories.component';
import { CategoryItemsComponent } from './recipes/categories/category-items/category-items.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    FoodModuleComponent,
    RecipesComponent,
    CategoriesComponent,
    CategoryItemsComponent,
  ],
  imports: [
    CommonModule,
    FoodModuleRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class FoodModuleModule { }
