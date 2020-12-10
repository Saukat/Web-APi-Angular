import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  //getAllEmp
  getAllEmpUrl='http://localhost:3000/product';
  constructor(private http:HttpClient) { }

  getAllEmpData(){
    return this.http.get(this.getAllEmpUrl);
  }
}
