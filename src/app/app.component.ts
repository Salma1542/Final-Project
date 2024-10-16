import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Chefify';
  shouldRender: boolean = false;

  constructor(private router: Router) {}

  ngDoCheck(): void {
   if(this.router.url.includes('auth')|| this.router.url.includes('splash')){
    this.shouldRender=false;
   }
   else{
    this.shouldRender=true;
   }
  }

}

