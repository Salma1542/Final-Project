import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { IRecipe } from '../../../interfaces/recipes';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {
  recipes:IRecipe[]=[];
  p:number = 1;
  itemsPerPage:number = 8;
  totalRecipe:any;
  title:string = '';
  course:string = '';
  cookTime:number = 0;
  ingredients:string = '';
  directions:string = '';
  photoUrl:string = '';
  modal: string= "exampleModal1";

  ngOnInit(): void {
    let dataService= new DataService;
    this.recipes = dataService.getRecipe();
    this.totalRecipe = this.recipes.length;
  }

  pushRecipe(){
    this.recipes.unshift(
      {
        "id": null,
        "title": this.title,
        "course": this.course,
        "cuisine": null,
        "mainIngredient": null,
        "description": null ,
        "source": null,
        "url": null,
        "urlHost": null,
        "prepTime": null,
        "cookTime": this.cookTime,
        'totalTime': null,
        'servings': null,
        'yield': null ,
        'ingredients': this.ingredients,
        'directions': this.directions,
        'rating': null,
        'publicUrl': null,
        'photoUrl': this.photoUrl,
        'private': null,
        'nutritionalScoreGeneric': null,
        'calories':null ,
        'fat': null ,
        'cholesterol': null,
        'sodium': null ,
        'sugar': null ,
        'carbohydrate': null,
        'fiber': null,
        'protein': null,
        'cost': null,
        'tags': null,
      }
    )
    this.title = '';
    this.course = '';
    this.cookTime = 0;
    this.ingredients = '';
    this.directions = ' ';
    this.photoUrl = ' ';
  }

  dishDetails:any={};
  addDetails(el:IRecipe){
    this.dishDetails={
      title: el.title,
      cooktime: el.cookTime,
      ingredients: el.ingredients,
      directions:el.directions,
      photoUrl:el.photoUrl,
    }
    localStorage.setItem('dishDetails',JSON.stringify(this.dishDetails));


  }



  constructor(private authService: AuthService) {}

  abilityToLogin() {
    if (this.authService.isAuthenticated(JSON.parse(localStorage.getItem('regData')!).length) ) {
      this.modal="exampleModal";
      return true;

    }
     if(this.authService.len==0) {
      return false;
    }
    else{
      alert('You must login first');
      return false;
    }
  }
  cartRecipe:any[]=[];
  add(recipe: IRecipe): void {
    this.cartRecipe=localStorage.getItem('cartRecipe')?JSON.parse(localStorage.getItem('cartRecipe')!):[];
    this.cartRecipe.push(recipe);

    localStorage.setItem('cartRecipe', JSON.stringify(this.cartRecipe));

    alert(`${recipe.title} has been added to your saved recipes!`);
  }
}
