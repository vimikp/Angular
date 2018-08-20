import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../shared/models/appointment.model';
import { AppointmentService } from '../../shared/services/appointment.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css'],
  providers: [AppointmentService]
})
export class AppointmentDetailComponent implements OnInit {
  pageTitle: string = "Appointment Details";
  appointment: Appointment;
  path: string;
  Id: string;
  constructor(private _appointmentService: AppointmentService, private _route: ActivatedRoute, private _router: Router) {

  }

  onEditAppointment() {
    let id = +this._route.snapshot.paramMap.get('id');
    this._router.navigate(['/edit', id]);
  }
  onBack(): void {
    this._router.navigate(['/appointments']);
  }

  ngOnInit() {

    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.path = "http://devtechtest.previewourapp.com/api/Appointment/" + id + "?" + "providerEmail=vimikp@gmail.com";
    console.log(this.path);
    this._appointmentService.getAppointment(this.path).subscribe((data) => this.appointment = data);

  }

}
