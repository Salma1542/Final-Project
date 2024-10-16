import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
recipe:any
photoUrl!: String;
ingredients!: String[];
directions!: String;
dishDetails:any;
ingredientsDetails: string='';
ngOnInit(): void {
  this.dishDetails= JSON.parse(localStorage.getItem('dishDetails')!);
  console.log(this.dishDetails);
  this.photoUrl=this.dishDetails.photoUrl;
  this.ingredients=this.dishDetails.ingredients.split('\n');
  this.directions=this.dishDetails.directions;
const recipeData = localStorage.getItem('selectedRecipe');
    if (recipeData) {
      this.recipe = JSON.parse(recipeData);
    }
  for (let index = 0; index < this.ingredients.length; index++) {

  this.ingredientsDetails+= this.ingredients[index]+ '<br>';
  }
}
constructor(private location: Location) {}

goBack(): void {
  this.location.back();
}

}
