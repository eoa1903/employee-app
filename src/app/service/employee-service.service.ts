import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../entity/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  public employe: any;
  private url='http://localhost:8080/employee';

  constructor(private http: HttpClient) { 
  }

  // public findAll(): Observable<Employee[]> {
  //   this.employe = this.http.get<Employee[]>(this.url);
  //   this.employe.subscribe((data: any) =>{ console.log(data)})
  //   return this.employe;
  // }

  public listAll(): any{
    let timeNow = new Date();
    let t = this.http.get(this.url);
    let timeLater = new Date();
    return t;
  }
}
