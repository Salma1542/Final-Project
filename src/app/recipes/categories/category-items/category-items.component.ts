import { Component, DoCheck, Input, OnInit, Output } from '@angular/core';
import { IRecipe } from '../../../interfaces/recipes';
import { ICategory } from '../../../interfaces/category';
import { DataService } from '../../../services/data.service';
import { EventEmitter } from 'stream';
@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrl: './category-items.component.scss'
})
export class CategoryItemsComponent implements OnInit {

  recipes!:IRecipe[];
  category:IRecipe[]=[];
  ngOnInit(): void {
    let  recipeService =new DataService;
    this.recipes = recipeService.getRecipe();
  }

  categories:ICategory[] = [
    {
      "category" : "Vegetables",
      "images": "../../../assets/images/vegetables.jpg"
    },
    {
      "category" : "Chicken",
      "images": "../../../assets/images/chicken.jpg"
    },
    {
      "category" : "Rice & Grains ",
      "images": "../../../assets/images/rice.avif"
    },
    {
      "category" : "Fruits ",
      "images": "../../../assets/images/fruit.jpg"
    },
    {
      "category" : "Fish",
      "images": "../../../assets/images/fish.jpg"
    },
    {
      "category" : "Breakfast ",
      "images": "../../../assets/images/breakfast.jpg"
    },
    {
      "category" : "Snacks and Sandwiches ",
      "images": "../../../assets/images/snack.jpg"
    },
    {
      "category" : "Desserts",
      "images": "../../../assets/images/dessert.jpg"
    },
    {
      "category" : "Lunch",
      "images": "../../../assets/images/lunch.avif"
    },
    {
      "category" : "Soup",
      "images": "../../../assets/images/soup.jpg"
    },


  ]

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
  getUniqueRecipes(ingredientsToRemove: string[] = []) {
    const uniqueIngredients = new Set();

    return this.recipes.filter(recipe => {
      // تحقق مما إذا كانت mainIngredient موجودة وتخطي إذا كانت في ingredientsToRemove
      const mainIngredient = recipe.mainIngredient?.trim();
      if (mainIngredient && ingredientsToRemove.includes(mainIngredient)) {
        return false; // تجاهل الوصفة إذا كانت تساوي أي من العناصر المراد إزالتها
      }

      // تحقق من أن mainIngredient ليس فارغًا
      if (mainIngredient && !uniqueIngredients.has(mainIngredient)) {
        uniqueIngredients.add(mainIngredient);
        return true; // احتفظ بالوصفة
      }

      return false; // تجاهل الوصفات الفارغة أو المكررة
    });
  };




}
