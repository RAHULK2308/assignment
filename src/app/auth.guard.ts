import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterationService } from './registeration.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private register:RegisterationService,private router:Router){}
  canActivate():boolean{
    if(this.register.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
    
  
}
}