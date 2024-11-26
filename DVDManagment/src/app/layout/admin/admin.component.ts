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
  CopiesAvailable: [null, [Validators.required, Validators.min(1)]],
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

    // addDvd() {
    //   if (this.addDvdForm.valid) {
    //     const formData = this.addDvdForm.value;
    //     console.log(formData.CopiesAvailable)

    //     this.adminservice.createdvd(formData).subscribe(data=>{

    //     })

  
    //     // Log the updated dvds array
    //     console.log('DVDs Array:', this.dvds);

    //     this.toastr.success(`Dvd ${formData.title} Added successfully....`)
  
    //     // Optionally reset the form after submission
    //     this.addDvdForm.reset();
    //   } else {
    //     this.toastr.error('Form is invalid');
    //   }
    // }

    addDvd() {
      if (this.addDvdForm.valid) {
        const formData = new FormData();
        formData.append('title', this.addDvdForm.get('title')?.value);
        formData.append('director', this.addDvdForm.get('director')?.value);
        formData.append('genre', this.addDvdForm.get('genre')?.value);
    
        // Convert the releaseDate to ISO 8601 format
        const releaseDate = new Date(this.addDvdForm.get('releaseDate')?.value);
        formData.append('releaseDate', releaseDate.toISOString());
    
        formData.append('copiesAvailable', this.addDvdForm.get('CopiesAvailable')?.value);
    
        // Add file
        const file = this.addDvdForm.get('imageUrl')?.value;
        if (file && file.length > 0) {
          formData.append('imageFile', file[0]);
        }
    
        this.adminservice.createdvd(formData).subscribe(
          (response) => {
            console.log('DVD added successfully:', response);
            this.toastr.success('DVD added successfully!');
          },
          (error) => {
            console.error('Error adding DVD:', error);
            this.toastr.error('Error adding DVD: ' + error.error);
          }
        );
      } else {
        this.toastr.error('Please fill out the form correctly.');
      }
    }
    
    
      editDvd(arg0: any) {
        throw new Error('Method not implemented.');
        }
        deleteDvd(id:number) {
          if(confirm('Do you want to delete?')) {
            this.adminservice.deletedvd(id).subscribe(data => {        
              this.loaddvds();
            });
          }

          this.toastr.warning('Dvd  is deleted')
        }

}
