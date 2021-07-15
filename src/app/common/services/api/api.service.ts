import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppointmentsModel } from '../../interfaces/appointments-model';
import { CustomersModel } from '../../interfaces/customers-model';
import { WorkTypesModel } from '../../interfaces/work-types-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  customersModel: CustomersModel;

  constructor(private httpClient: HttpClient) { }

  //headers
  private headers = {
    "Accept": "*/*",
    "Content-Type": "application/json"
  };

  //Appointments
  GetAppointments(): Promise<AppointmentsModel> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${environment.api}/api/GetAppointments`,
      {
        headers: {
          ...this.headers
        }
      })
      .toPromise()
      .then((appointmentsData: AppointmentsModel) => {
        return resolve(appointmentsData);
      })
      .catch(error => {
        return reject(error);
      });
    });
  }

  //Customers
  GetCustomers(): Observable<CustomersModel>{
    return this.httpClient.get<CustomersModel>(`${environment.api}/api/GetCustomers`,
    {
      headers: {
        ...this.headers
      }
    });
  }


  //work types
  GetWorkTypes(): Observable<WorkTypesModel>{
    return this.httpClient.get<WorkTypesModel>(`${environment.api}/api/GetWorkTypes`,
    {
      headers: {
        ...this.headers
      }
    });
  }

}