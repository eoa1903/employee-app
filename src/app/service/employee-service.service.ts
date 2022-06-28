import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../entity/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private url='http://localhost:8080/all';

  constructor(private http: HttpClient) { 
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}
