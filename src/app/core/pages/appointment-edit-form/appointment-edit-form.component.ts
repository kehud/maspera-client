import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AppointmentsModel } from 'src/app/common/interfaces/appointments-model';
import { CustomersModel } from 'src/app/common/interfaces/customers-model';
import { WorkTypesModel } from 'src/app/common/interfaces/work-types-model';
import { ApiService } from 'src/app/common/services/api/api.service';
import { GlobalService } from 'src/app/common/services/local-service/global.service';

@Component({
  selector: 'app-appointment-edit-form',
  templateUrl: './appointment-edit-form.component.html',
  styleUrls: ['./appointment-edit-form.component.scss']
})
export class AppointmentEditFormComponent implements OnInit {

  selectedAppointmentsModel: AppointmentsModel;
  customersModel: CustomersModel;
  workTypesModel: WorkTypesModel;
  time: Date = new Date();
  date: Date = new Date();

  constructor(public globalService: GlobalService, private apiService: ApiService) {}

  ngOnInit(): void {

    if(this.globalService.appointmentEditFormItemGlobal !== undefined)
    {
      //fill form
      this.selectedAppointmentsModel = this.globalService.getAppointmentEditFormItemGlobal();
      this.time = this.selectedAppointmentsModel.AppointmentDate;
      debugger;

      this.date = new Date(this.selectedAppointmentsModel.AppointmentDate);

      //load user list
      this.loadCustomers();
      //load work types
      this.loadWorkTypes();
    }
  }



  //load customers
  loadCustomers(){
    this.apiService.GetCustomers().subscribe((data)=>{
      this.customersModel = data;
    })
  }

  //loadWorkTypes
  loadWorkTypes(){
    this.apiService.GetWorkTypes().subscribe((data)=>{
      this.workTypesModel = data;
    })
  }

}
