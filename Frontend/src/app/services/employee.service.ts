import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  employee!: Employee

  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/employee/all`);
  }


  public addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiUrl}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiUrl}/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/employee/delete/${employeeId}`);
  }
}
