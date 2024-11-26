import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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


  constructor(private fb: FormBuilder, public toastr: ToastrService,public router:Router ) {
    this.loginForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
      phonenumber: new FormControl(""),
      nic: new FormControl(""),
      email: new FormControl(""),




    })



  }
  ngOnInit(): void {

    this.loginForm = this.fb.group({


      username: ['', Validators.required],

      password: ['', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)

      ]

      ],
      phonenumber: ['', [Validators.required,
     
      Validators.maxLength(10),
      Validators.minLength(10) //this validation not display in users check that

      ]],
      nic: ['', [Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10)
      ]
      ],

      email: ['', [Validators.required,
        emailContainsAt
      ]]

    })





  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Show success toastr message
      this.toastr.success("Form Submitted", "Success");

      // Navigate to the customer page
      this.router.navigate(['/customer']);
    } else {
      // Handle form validation failure if necessary
      this.toastr.error("Please fill in the form correctly", "Error");
    }
  }








}
