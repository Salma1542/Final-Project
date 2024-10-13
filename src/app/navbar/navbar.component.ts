import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { IRecipe } from '../interfaces/recipes';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  filterName: string = '';
  recipes:IRecipe[]=[];
  ngOnInit(): void {
    let dataService= new DataService;
    this.recipes = dataService.getRecipe();
  }
}
