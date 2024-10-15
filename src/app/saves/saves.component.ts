import { Component } from '@angular/core';
import { IRecipe } from '../interfaces/recipes';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.component.html',
  styleUrl: './saves.component.scss'
})
export class SavesComponent {
  savedRecipes: IRecipe[] = [];

  ngOnInit(): void {
    const savedData = localStorage.getItem('cartRecipe');
    if (savedData) {
      this.savedRecipes = JSON.parse(savedData);
    } else {
      this.savedRecipes = []; 
    }
  }
}
