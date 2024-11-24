import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerserviceService } from '../../customer/customerservice.service';
import { AdminService } from '../../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  addDvdForm: FormGroup;

dvds: any[]=[];
customers: any[]=[];

showdashboard=true
showadddvd = false;
showCustomers = false;
showInventory = false;

constructor(private fb:FormBuilder,private customerservice:CustomerserviceService,private adminservice:AdminService,private toastr:ToastrService){
this.addDvdForm=this.fb.group({
  title: ['', Validators.required],
  director: ['', Validators.required],
  genre: ['', Validators.required],
  releaseDate: ['', Validators.required],
  copiesAvailable: [null, [Validators.required, Validators.min(1)]],
  imageUrl: [null, Validators.required]
})
}
  ngOnInit(): void {
    this.loadcustomers()
    this.loaddvds()
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


    loadcustomers() {
      this.customerservice.getcustomers().subscribe((data) => {
        this.customers = data;
        console.log(this.customers)
      })
    }

    loaddvds(){
      this.adminservice.getalldvds().subscribe((data)=>{
        this.dvds=data;
        console.log(this.dvds)
      })
    }

    addDvd() {
      if (this.addDvdForm.valid) {
        const formData = this.addDvdForm.value;

        this.adminservice.createdvd(formData).subscribe(data=>{
        })

  
        // Log the updated dvds array
        console.log('DVDs Array:', this.dvds);

        this.toastr.success(`Dvd ${formData.title} Added successfully....`)
  
        // Optionally reset the form after submission
        this.addDvdForm.reset();
      } else {
        this.toastr.error('Form is invalid');
      }
    }
      editDvd(arg0: any) {
        throw new Error('Method not implemented.');
        }
        deleteDvd(arg0: any) {
        throw new Error('Method not implemented.');
        }

}
