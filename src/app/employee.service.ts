import { Injectable } from "@angular/core";

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable()
export class EmployeeService {
  employees: Employee[] = [
    {
      id: "1",
      firstName: "santhosh",
      lastName: "japa",
      email: "test@test.com"
    },
    {
      id: "2",
      firstName: "ganesh",
      lastName: "pilli",
      email: "ganesh@test.com"
    }
  ];
  constructor() {}

  getEmployees() {
    return this.employees;
  }

  getEmployeeById(employeeId: string) {
    return this.employees[
      this.employees.findIndex(emp => emp.id === employeeId)
    ];
  }
  updateEmployee(employeeId: string, employeeDetails: Employee) {
    const employeeIndex = this.employees.findIndex(
      emp => emp.id === employeeId
    );
    this.employees[employeeIndex] = employeeDetails;
  }
}
