import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {

this.loginForm=new FormGroup({
  username:new FormControl(""),
  password:new FormControl("")
})


   }




  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required,

        Validators.minLength(6),
        Validators.maxLength(6)

      ]]


    })





  }

  onSubmit(){



    if(this.loginForm.valid){

      console.log('Form Submitted',this.loginForm.value);
    }

    else{
      console.log('Form is not  valid');
    }
  }




}

