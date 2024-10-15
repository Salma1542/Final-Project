import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from '../../interfaces/recipes';
import { DataService } from '../../services/data.service';
import { ICategory } from '../../interfaces/category';
import { log } from 'console';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  recipes:IRecipe[]=[];
  category:IRecipe[]=[];
  ngOnInit(): void {
    let  recipeService =new DataService;
    this.recipes = recipeService.getRecipe();
  }
  categories:ICategory[] = [
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
    {
      "category" : "Vegetables",
      "images": "../../../assets/images/vegetables.jpg"
    },
    {
      "category" : "Chicken",
      "images": "../../../assets/images/chicken.jpg"
    },
    {
      "category" : "Fish",
      "images": "../../../assets/images/fish.jpg"
    },
    {
      "category" : "Rice & Grains ",
      "images": "../../../assets/images/rice.avif"
    },
    {
      "category" : "Fruits ",
      "images": "../../../assets/images/fruit.jpg"
    },
  ]


}
