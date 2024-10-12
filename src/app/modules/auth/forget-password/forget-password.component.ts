import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
// @ViewChild('forgetPasswordForm') forgetPasswordForm!:ElementRef;
isEqual!:boolean;
ifPassed!:string;
regData:any []=JSON.parse(localStorage.getItem("regData")!) ;

forgetPassword(form:NgForm){
if (form.value.password === form.value.cPassword && form.value.password !="" &&form.value.cPassword !="") {
  this.isEqual=true;
  this.ifPassed="/auth/login";
  console.log("ok");

}else{
  this.isEqual=false;
}
if(this.isEqual==true){

  for (let index = 0; index < this.regData.length; index++) {
    if (form.value.email === this.regData[index].email) {
      this.regData[index].password = form.value.password;
      localStorage.setItem('regData', JSON.stringify(this.regData)) ;


    }

  }
}
}
typydOn(){
  this.isEqual=true;
}
}
