import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

dvds: any[]=[];
customers: any[]=[];




showDashboard = true;
  showCustomers = false;
  showInventory = false;

  // Toggle section visibility
  dashboardShow() {
    this.resetSections();
    this.showDashboard = true;
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
    this.showDashboard = false;
    this.showCustomers = false;
    this.showInventory = false;
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
    homepage() {
    throw new Error('Method not implemented.');
    }

    addDvd() {
      throw new Error('Method not implemented.');
      }

      editDvd(arg0: any) {
        throw new Error('Method not implemented.');
        }
        deleteDvd(arg0: any) {
        throw new Error('Method not implemented.');
        }

}
