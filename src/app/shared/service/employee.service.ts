import { Employee } from '../../model/employee';
import { EMPLOYEES } from '../../model/mock-employee';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }


  getEmployeesFiltered(state: boolean): Observable<Employee[]> {
    return of(EMPLOYEES.filter(el => {
      return el.active === state;
    }));
  }

}
