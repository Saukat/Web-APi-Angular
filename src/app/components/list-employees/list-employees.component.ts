import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from 'src/app/appService/emp-service.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  allEmp:any;
  constructor(private empService:EmpServiceService) { }

  ngOnInit(): void {
       this.getAllEmpData();
  }

  getAllEmpData(){
    this.empService.getAllEmpData().subscribe(
      (emp)=>{
        console.log("Emp All Data:"+emp);
        this.allEmp=emp;
      }
    )
  }

}
