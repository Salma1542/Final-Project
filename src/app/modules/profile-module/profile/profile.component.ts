import { Component } from '@angular/core';
import { IRecipe } from '../../../interfaces/recipes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
profilePosts:any[]=JSON.parse(localStorage.getItem('addToProfile')!);
numOfPosts:number=this.profilePosts.length;
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
cartRecipe:any[]=[];
add(recipe: IRecipe): void {
  this.cartRecipe=localStorage.getItem('cartRecipe')?JSON.parse(localStorage.getItem('cartRecipe')!):[];
  this.cartRecipe.push(recipe);

  localStorage.setItem('cartRecipe', JSON.stringify(this.cartRecipe));

  alert(`${recipe.title} has been added to your saved recipes!`);
}
regData:any[]=JSON.parse(localStorage.getItem('regData')!);
name:any= this.regData[this.regData.length-1].fname +' '+ this.regData[this.regData.length-1].lname;
email:any=this.regData[this.regData.length-1].email;
letter:string= this.regData[this.regData.length-1].fname.charAt(0).toUpperCase();

}

