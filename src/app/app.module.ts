import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


//components
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

//pages
import { LoginComponent } from './core/pages/login/login.component';
import { AppointmentListComponent } from './core/pages/appointment-list/appointment-list.component';
import { AppointmentEditFormComponent } from './core/pages/appointment-edit-form/appointment-edit-form.component';

//controls
import { AppointmentGridItemComponent } from './common/controls/grid-items/appointment-grid-item/appointment-grid-item.component';
import { AppointmentGridComponent } from './common/controls/grid/appointment-grid/appointment-grid.component';
import { AppointmentActionButtonsComponent } from './common/controls/action-buttons/appointment-action-buttons/appointment-action-buttons.component';

//services
import { GlobalService } from './common/services/local-service/global.service';

//date picker
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AppointmentListComponent,
    AppointmentGridItemComponent,
    AppointmentGridComponent,
    AppointmentActionButtonsComponent,
    AppointmentEditFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    FormsModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
