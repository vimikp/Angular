import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { AppointmentService } from './shared/services/appointment.service';
import { AppointmentDetailComponent } from './appointments/appointment-detail/appointment-detail.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AppointmentsComponent,
    AppointmentComponent,
    UserListComponent,
    AppointmentListComponent,
    AppointmentDetailComponent,
    HeaderComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent],
})
export class AppModule {

 
  constructor(private router: Router) { }

  goToDetails() {
    this.router.navigate(['']);
  }
}
