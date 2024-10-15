import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
//  @ViewChild ('loginform') loginform !: ElementRef;
ifPassed!:string;
items:any=[];
check:boolean=false;
formSubmitted:boolean=false;
 login(form:NgForm){
  this.formSubmitted=true;
this.items= JSON.parse(localStorage.getItem('regData')!);
// console.log(this.items[0].fname);
for (let index = 0; index < this.items.length; index++) {
if (form.value.username === (this.items[index].fname +' '+ this.items[index].lname)) {
  if(form.value.password === (this.items[index].password)){
this.check=true;
console.log("ok");
this.ifPassed="/recipes"
  }
  else{
  }
}
}
}
onInputChange(){
  this.formSubmitted=false;
}
}


