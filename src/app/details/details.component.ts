import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{

photoUrl!: String;
ingredients!: String[];
directions!: String;
dishDetails:any;
ingredientsDetails: string='';
ngOnInit(): void {
  this.dishDetails= JSON.parse(localStorage.getItem('dishDetails')!);
console.log(this.dishDetails);
this.photoUrl=this.dishDetails.photoUrl;
this.ingredients=this.dishDetails.ingredients.split('\n');
this.directions=this.dishDetails.directions;

for (let index = 0; index < this.ingredients.length; index++) {

this.ingredientsDetails+= this.ingredients[index]+ '<br>';
}

}
}
