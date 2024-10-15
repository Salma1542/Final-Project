import { Component, OnInit } from '@angular/core';
import { Ichef } from '../interfaces/chefs';
import { chefdata } from './chefData';

@Component({
  selector: 'app-top-chef',
  templateUrl: './top-chef.component.html',
  styleUrls: ['./top-chef.component.scss'] 
})
export class TopChefComponent implements OnInit {
  chef: Ichef[] = [];

  ngOnInit(): void {
    this.chef = chefdata;
  }
}
