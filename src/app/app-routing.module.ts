import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent},
{ path: '', component: UserLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
