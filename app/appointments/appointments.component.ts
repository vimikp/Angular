import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/services/appointment.service';
import { Appointment } from '../shared/models/appointment.model';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  selectedAppointment: Appointment;

  constructor() { }

  ngOnInit() {
  }

}
