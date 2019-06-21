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

  getEmployeeById(employeeId: string): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/GetEmaployeeById/' + employeeId);
  }
  createEmployee(employee: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    console.log(employee);
    return this.http.post<Employee>(this.url + '/PostEmaployee', employee);
  }
  
  updateEmployee(employee: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Employee>(this.url + '/UpdateEmployeeDetails', employee, httpOptions);
  }

  deleteEmployeeById(employeeid: string): Observable<number> {
    console.log()
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + '/DeleteEmaployeeDelete?id='+ employeeid, httpOptions);
  }

}
