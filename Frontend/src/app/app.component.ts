import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Employee } from './models/employee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public employees!: Employee[];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      imageUrl: new FormControl(),
      jobTitle: new FormControl()
    });
    this.getEmployees()
  }
  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  
  form!: FormGroup
  onAddemployee(): void{
    document.getElementById('from-add-close')?.click();
    this.employeeService.addEmployee(this.form.value).subscribe(
      (response)=>{
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
    console.log(this.form.value);
  }

  public onOpenModal(employee: Employee | null, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', 'addemployeemodal');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', 'editemployeemodal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', 'deleteemployeemodal');
    }
    container?.appendChild(button);
    button.click();
  }
}
