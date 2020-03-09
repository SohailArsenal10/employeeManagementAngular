import { Component, OnInit } from "@angular/core";
import { EmployeeService, Employee } from "../employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor(private service: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.employees = this.service.getEmployees();
  }
  editEmployee(employeeId: number) {
    this.router.navigate(["/editEmployee", employeeId]);
  }
}
