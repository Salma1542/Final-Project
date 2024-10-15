import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { IRecipe } from '../interfaces/recipes';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  recipe: IRecipe[] = [];
  totalRecipe:any;
  ngOnInit(): void {
    let recipes = new DataService();
    this.recipe = recipes.getRecipe();
    this.totalRecipe = this.recipe.length;
  }
  slideConfig = {
    slidesToShow: 5, // عرض 5 عناصر في كل مرة
    slidesToScroll: 5,
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows:true,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:true,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:true,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
          infinite: true,
        }
      }
    ]
  };
  dishDetails:any={};
  addDetails(el:IRecipe){
    this.dishDetails={
      title: el.title,
      cooktime: el.cookTime,
      ingredients: el.ingredients,
      directions:el.directions,
      photoUrl:el.photoUrl,
    },
    localStorage.setItem('dishDetails',JSON.stringify(this.dishDetails));
  }


}
