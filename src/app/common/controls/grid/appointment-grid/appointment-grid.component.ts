import { Component, OnInit } from '@angular/core';
import { AppointmentsModel } from 'src/app/common/interfaces/appointments-model';
import { ApiService } from 'src/app/common/services/api/api.service';

@Component({
  selector: '[app-appointment-grid]',
  templateUrl: './appointment-grid.component.html',
  styleUrls: ['./appointment-grid.component.scss']
})
export class AppointmentGridComponent implements OnInit {

  appointmentsModelRecords: AppointmentsModel;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.load();
  
}

async load(){
  let _appointmentsModelRecords: any;
  _appointmentsModelRecords = await this.apiService.GetAppointments();
  this.appointmentsModelRecords = _appointmentsModelRecords;
}
}
