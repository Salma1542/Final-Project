import { Component, ElementRef, viewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { IRecipe } from '../interfaces/recipes';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  filterName: string = '';
  recipes:IRecipe[]=[];
  isProfileVisible: boolean = false;

  ngOnInit(): void {
    let dataService= new DataService;
    this.recipes = dataService.getRecipe();


    this.isProfileVisible = this.showProfile();

  }


  constructor(private router: Router, private authService: AuthService) {}



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
  showProfile():boolean {
    if (this.authService.isAuthenticated(JSON.parse(localStorage.getItem('regData')!).length) ) {
      return true;

    }
    else{
      return false;
    }
}


}
