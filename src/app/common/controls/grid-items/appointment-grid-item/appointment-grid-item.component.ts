import { Component, Input, OnInit } from '@angular/core';
import { AppointmentsModel } from 'src/app/common/interfaces/appointments-model';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/common/services/local-service/global.service';

@Component({
  selector: '[app-appointment-grid-item]',
  templateUrl: './appointment-grid-item.component.html',
  styleUrls: ['./appointment-grid-item.component.scss']
})
export class AppointmentGridItemComponent implements OnInit {

  constructor(private route: Router, public globalService: GlobalService) { }

  url: string = '/appointment-edit-form.component';
  
  //input
  @Input() appointmentsModelItem: AppointmentsModel;

  ngOnInit(): void {
  }

  OpenDetailsForm(appointmentsItem: any){
    this.globalService.setAppointmentDetailsFormItemGlobal(appointmentsItem);
    this.route.navigate([this.url]);
  }

  OpenEditForm(appointmentsItem: any){
    this.globalService.setAppointmentEditFormItemGlobal(appointmentsItem);
    this.route.navigate([this.url]);
  }
}
