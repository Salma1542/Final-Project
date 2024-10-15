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
