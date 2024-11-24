import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getalldvds(){
    return this.http.get<any[]>('http://localhost:5276/api/Manager/GetAllDVDs')
  }

  createdvd(dvd:any){
    return this.http.post('http://localhost:5276/api/Manager/AddDVD',dvd)
  }

  deletedvd(id:number){
    return this.http.delete('http://localhost:5276/api/Manager/'+id)
  }
}
