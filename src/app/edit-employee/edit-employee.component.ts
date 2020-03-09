import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService, Employee } from "../employee.service";

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.css"]
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EmployeeService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["employeeId"];
    this.employee = this.service.getEmployeeById(id);
  }

  updateEmployee() {
    console.log("this.employee-", this.employee);
    this.service.updateEmployee(this.employee.id, this.employee);
    this.router.navigate(["/employee"]);
  }

  cancelEmployee() {
    this.router.navigate(["/employee"]);
  }
}
