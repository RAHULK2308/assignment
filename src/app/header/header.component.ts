import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterationService } from '../registeration.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public register:RegisterationService,public router:Router) { }

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/'])
}
}
