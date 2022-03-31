import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterationService } from '../registeration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public fb:FormBuilder, public register:RegisterationService, public router:Router) { }
user:any={
  fullname:'',
  email:'',
  password:''
}

  ngOnInit(): void {
    
  }

  signForm= this.fb.group({
    fullname:[null,Validators.required],
    email:[null,[Validators.email,Validators.required]],
    password:[null,[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
  })

  submit(){
    console.log(this.user)
    this.register.newUser(this.user)
    this.router.navigate(['/signin'])
  }
}
