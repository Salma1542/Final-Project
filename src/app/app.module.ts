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
import { RecipesComponent } from './recipes/recipes.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './recipes/categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { SearchPipe } from './pipe/search.pipe';
import { SavesComponent } from './saves/saves.component';
import { CarouselComponent } from './carousel/carousel.component';
<<<<<<< HEAD
import { TopChefComponent } from './top-chef/top-chef.component';
import { ChefDetailsComponent } from './chef-details/chef-details.component';
=======
import { CategoryItemsComponent } from './recipes/categories/category-items/category-items.component';

>>>>>>> 8bc1d010ea1a98816971bc4826aa0beb15956106
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeCarsoulComponent,
    FooterComponent,
    RecipeCardsComponent,
    AddPostComponent,
    RecipesComponent,
    SavesComponent,
    AboutComponent,
    CategoriesComponent,
    DetailsComponent,
    SearchPipe,
<<<<<<< HEAD
    TopChefComponent,
    ChefDetailsComponent,
=======
    CategoryItemsComponent,
>>>>>>> 8bc1d010ea1a98816971bc4826aa0beb15956106
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
