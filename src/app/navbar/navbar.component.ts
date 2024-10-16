import { Component, ElementRef, viewChild } from '@angular/core';
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
// placeValue: string='';
// index:number=0;
// placeArray:string[]=['w','h','a','t',' ','W','o','u','l','d',' ','Y','o','u',' ','L','i','k','e',' ','T','o',' ','C','o','o','k'];
  ngOnInit(): void {
    let dataService= new DataService;
    this.recipes = dataService.getRecipe();

    // setInterval(()=>{
    //   if(this.index < this.placeArray.length){
    //   this.placeValue.concat(this.placeArray[this.index++]);}
    //   else{
    //     this.index=0;
    //   }

    // },1000);
  }
}
