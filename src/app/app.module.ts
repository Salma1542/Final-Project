import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeCarsoulComponent } from './home-carsoul/home-carsoul.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './modules/food-module/recipes/recipes.component';
import { CategoriesComponent } from './modules/food-module/recipes/categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { SearchPipe } from './pipe/search.pipe';
// import { SavesComponent } from './modules/save-module/saves/saves.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopChefComponent } from './top-chef/top-chef.component';
import { ChefDetailsComponent } from './chef-details/chef-details.component';
// import { CategoryItemsComponent } from './recipes/categories/category-items/category-items.component';
import { SplashComponent } from './splash/splash.component';
import { RecipeCategoryComponent } from './modules/food-module/recipes/categories/recipe-category/recipe-category.component';
// import { ProfileComponent } from './modules/profile-module/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeCarsoulComponent,
    FooterComponent,
    RecipeCardsComponent,
    AddPostComponent,
    // RecipesComponent,
    // SavesComponent,
    // CategoriesComponent,
    DetailsComponent,
    SearchPipe,
    TopChefComponent,
    ChefDetailsComponent,
    // CategoryItemsComponent,
    SplashComponent,
    RecipeCategoryComponent,
    // ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CarouselComponent ,
    NgxPaginationModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
