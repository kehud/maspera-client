import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  url: string = '/appointment-list';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private route: Router) { 
      
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],      
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.route.navigate([this.url]);
    }
  }

  private isLoggedIn() {
    return Boolean(this.authService.getToken());
  }

  submitForm() {
    this.authService.signIn(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
      .then(res => {
        this.route.navigate([this.url]);
      })
      .catch(function(error) {
        this.errorMessage = error;
    }.bind(this));
  }

}
