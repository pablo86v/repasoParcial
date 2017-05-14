import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

 constructor() { }

 public setUser(nombre : string) {
    localStorage.setItem("usuario",nombre);
  }


 public getUser = function(){    
    return localStorage.getItem("usuario");
  }



}
