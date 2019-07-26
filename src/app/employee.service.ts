import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:54236/Service.svc/';
  constructor(private http: HttpClient) { }
  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + 'GetallEmployees');
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.post<Employee>(this.url + 'GetEmployeeById/', id);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    console.log(employee);
    return this.http.post<Employee>(this.url + 'AddEmployee',employee);
  }
  
  updateEmployee(employee: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Employee>(this.url + 'UpdateEmployee', employee);
  }

  deleteEmployeeById(employeeid: string): Observable<number> {
    console.log()
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<number>(this.url + 'DeleteEmaployee?id=',employeeid);
  }

}
