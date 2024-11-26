import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function emailContainsAt(control: AbstractControl) {
  const email = control.value;
  if (email && !email.includes('@')) {
    return { emailNoAt: true };  // Return error if '@' is missing
  }
  return null;  // Return null if validation passes
}




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
loginForm: FormGroup;


constructor(private fb:FormBuilder){
this.loginForm=new FormGroup({
  username:new FormControl(""),
  password:new FormControl(""),
  phonenumber:new FormControl(""),
  nic:new FormControl(""),
  email:new FormControl(""),




})



}
  ngOnInit(): void {
    
this.loginForm=this.fb.group({


  username:['',Validators.required],

  password:['',[Validators.required,
    Validators.minLength(6),
    Validators.maxLength(6)

  ]
  
],
  phonenumber:['',[Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10)

  ]],
  nic:['',[Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10)
  ]
],

  email:['',[Validators.required,
    emailContainsAt
  ]]
 
})





  }

  onSubmit(){


    if(this.loginForm.valid){
      console.log('Form Submitted',this.loginForm.value);
    }

else{
  console.log('Form is not valid');
}



  }








}
