import { Injectable } from '@angular/core';
import { AppointmentsModel } from '../../interfaces/appointments-model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public appointmentEditFormItemGlobal: AppointmentsModel;
  public appointmentDetailsFormItemGlobal: AppointmentsModel;

  constructor() {
    // this.appointmentEditFormItemGlobal = null;
    // this.appointmentDetailsFormItemGlobal = null;
   }


   //appointmentEditFormItemGlobal
  public setAppointmentEditFormItemGlobal(val: AppointmentsModel){
    this.appointmentEditFormItemGlobal = val;
  }
  public getAppointmentEditFormItemGlobal(){
    return this.appointmentEditFormItemGlobal;
  }

  //appointmentDetailsFormItemGlobal
  public setAppointmentDetailsFormItemGlobal(val: AppointmentsModel){
    this.appointmentDetailsFormItemGlobal = val;
  }
  getAppointmentDetailsFormItemGlobal(){
    return this.appointmentDetailsFormItemGlobal;
  }

}
