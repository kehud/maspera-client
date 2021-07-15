import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { AppointmentListComponent } from './core/pages/appointment-list/appointment-list.component';
import { AppointmentEditFormComponent } from './core/pages/appointment-edit-form/appointment-edit-form.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: AppointmentListComponent},
  {path: "login", component: LoginComponent},
  {path: "appointment-list", component: AppointmentListComponent},
  {path: "appointment-edit-form.component", component: AppointmentEditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
