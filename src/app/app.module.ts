import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
import { CarouselComponent } from './carousel/carousel.component';
import { SavesComponent } from './saves/saves.component';

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
    // لا تضع CarouselComponent هنا
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CarouselComponent // هذا صحيح
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
