import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
@ViewChild('registrationForm') registrationForm!:ElementRef;

regData: any = [];
ifPassed!:string;

setData(form: NgForm) {
  // if(form.value.fname !='' && form.value.lname)
  if(form.dirty){
  this.regData = localStorage.getItem('regData') ? JSON.parse(localStorage.getItem('regData')!) : [];

  this.regData.push({
    fname: form.value.firstname,
    lname: form.value.lastname,
    email: form.value.email,
    password: form.value.password,
  });

  localStorage.setItem('regData', JSON.stringify(this.regData));
  this.ifPassed="/auth/login";
  }
  // console.log(localStorage.getItem('regData'));
}
}
