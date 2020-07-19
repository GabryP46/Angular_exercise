import { Employee } from './../model/employee';
import { EmployeeService } from './../shared/service/employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void{
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }

  getEmployeesFiltered(state: boolean): any{
    this.employeeService.getEmployeesFiltered(state)
    .subscribe(employees => this.employees = employees)
  }

}
