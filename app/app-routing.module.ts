import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { AppointmentService } from './shared/services/appointment.service';
import { AppointmentDetailComponent } from './appointments/appointment-detail/appointment-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: 'devtechtest.previewourapp.com/api/Appointment', component: AppointmentListComponent },
  { path: 'appointmentdetail', component: AppointmentDetailComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'appointments/:id', component: AppointmentDetailComponent },
  { path: 'edit/:id' , component: AppointmentComponent },
  { path: 'users', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router) {

  }
}

