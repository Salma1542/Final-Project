import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { chefdata } from '../top-chef/chefData';
import { IRecipe } from '../interfaces/recipes';

@Component({
  selector: 'app-chef-details',
  templateUrl: './chef-details.component.html',
  styleUrl: './chef-details.component.scss'
})
export class ChefDetailsComponent implements OnInit {
  chef: any;
  recipe: IRecipe[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));  
    this.chef = chefdata.find((c) => c.id == id);  
  }
}
