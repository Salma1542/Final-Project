import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../../interfaces/recipes';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.component.html',
  styleUrls: ['./saves.component.scss' ]
})
export class SavesComponent implements OnInit {
  savedRecipes: IRecipe[] = [];

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('cartRecipe');
      if (savedData) {
        this.savedRecipes = JSON.parse(savedData);
      } else {
        this.savedRecipes = [];
      }
    }
  }
}
