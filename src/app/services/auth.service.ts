import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // isloggedin: boolean = false;

  len:number= JSON.parse(localStorage.getItem('regData')!)?JSON.parse(localStorage.getItem('regData')!).length: 0;


  isAuthenticated(currentLength:number=0): boolean {
    if(currentLength>= this.len ){
    return true;
  }
    else{
      return false;
    }
  }
}
