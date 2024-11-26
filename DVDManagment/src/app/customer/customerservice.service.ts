import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient) { }

  getcustomers(){
    return this.http.get<any[]>('http://localhost:5276/api/Customer/Get Customers');
  }
}
