import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  addDvdForm: FormGroup;

dvds: any[]=[];
customers: any[]=[];

showdashboard=true
showadddvd = false;
showCustomers = false;
showInventory = false;

constructor(private fb:FormBuilder){
this.addDvdForm=this.fb.group({
  title: ['', Validators.required],
  director: ['', Validators.required],
  category: ['', Validators.required],
  releaseDate: ['', Validators.required],
  quantity: [null, [Validators.required, Validators.min(1)]],
  image: [null, Validators.required]
})
}

  // Toggle section visibility
  showadddvds() {
    this.resetSections();
    this.showadddvd = true;
  }

//this is show admin home page
  homepage(){
this.resetSections();
this.showdashboard=true
  }


  customersShow() {
    this.resetSections();
    this.showCustomers = true;
  }

  displayDVDs() {
    this.resetSections();
    this.showInventory = true;
    this.dvds=this.addDvdForm.value
  }

  resetSections() {
    this.showadddvd = false;
    this.showCustomers = false;
    this.showInventory = false;
    this.showdashboard=false;
  }
  reportsShow() {
    throw new Error('Method not implemented.');
    }
    returnShow() {
    throw new Error('Method not implemented.');
    }
    overdueShow() {
    throw new Error('Method not implemented.');
    }
    displayRentals() {
    throw new Error('Method not implemented.');
    }


    addDvd() {
      if (this.addDvdForm.valid) {
        const formData = this.addDvdForm.value;
  
        // Add the form data to the dvds array
        this.dvds.push(formData);
  
        // Log the updated dvds array
        console.log('DVDs Array:', this.dvds);
  
        // Optionally reset the form after submission
        this.addDvdForm.reset();
      } else {
        console.error('Form is invalid');
      }
    }
      editDvd(arg0: any) {
        throw new Error('Method not implemented.');
        }
        deleteDvd(arg0: any) {
        throw new Error('Method not implemented.');
        }

}
