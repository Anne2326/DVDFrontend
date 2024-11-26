import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  hide:boolean=false;
  func(){
    if (this.hide==false){
      this.hide=true;
    }
    else{
      this.hide =true
    }
  }

}
