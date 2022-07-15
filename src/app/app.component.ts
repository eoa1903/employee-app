import { Component,OnInit } from '@angular/core';
import { Employee } from './entity/Employee';
import { EmployeeServiceService } from './service/employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee-app';
  employees: Employee[] = [];
  data:any=[]


  constructor(private employeeService: EmployeeServiceService){}

  ngOnInit(): void {
      // this.employeeService.findAll().subscribe( data =>{
      //   this.employees = data});

        this.employeeService.listAll().subscribe((data: { [x: string]: any; }) => {
          this.data = Array.from(Object.keys(data), k =>data[k]); 
        });
  }

}
