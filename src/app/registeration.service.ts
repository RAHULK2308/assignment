import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  constructor(public http:HttpClient, public Router:Router) { }

  newUser(data:any){
     this.http.post("https://hiring-stackroots-server.herokuapp.com/auth/signup/user",data)
  }

  getuser(){
    return this.http.get("https://hiring-stackroots-server.herokuapp.com/auth/signin/user")
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
}

