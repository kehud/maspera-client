import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { ApiService } from 'src/app/common/services/api/api.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {

  loginUrl: string = '/login';

  constructor(private authService: AuthService, private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
    //1 loggedIn check
    if (!this.isLoggedIn()) {
      this.route.navigate([this.loginUrl]);
    }
  }
  
  private isLoggedIn() {
    return Boolean(this.authService.getToken());
  }

}
