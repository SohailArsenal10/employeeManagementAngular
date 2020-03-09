import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { EmployeeService } from "./employee.service";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "employee", component: EmployeeListComponent },
  { path: "editEmployee/:employeeId", component: EditEmployeeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
