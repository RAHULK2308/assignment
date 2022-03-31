import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterationService } from '../registeration.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
user:any;
email:any='';
password:any=''
  constructor(public fb:FormBuilder,public register:RegisterationService, public Router:Router) { }
 
  ngOnInit(): void {
this.register.getuser().subscribe(
  data=>{
    this.user=data;
    console.log(this.user)
  }
)
  }

  signForm= this.fb.group({
    
    email:[null,[Validators.email,Validators.required]],
    password:[null,[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
  })

  submit(){
    if(this.email==this.user.email && this.password == this.user.password){
      localStorage.setItem('token',"token");
      this.Router.navigate(['/'])
    } else{
      alert('inavlid login attempt')
    }
  }
}
