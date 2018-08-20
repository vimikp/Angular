import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppointmentService } from '../../shared/services/appointment.service';
import { Appointment } from '../../shared/models/appointment.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointment: Appointment;
  path: string;
  pageTitle: string;
  @Output() notes: EventEmitter<string> = new EventEmitter<string>(); 
 
  constructor(private _appointmentservice: AppointmentService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {

   
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getAppointment(id);

    });
  }

  ngOnChanges(): void {
   
  }
  onNotesChange(notes: string): void {
    this.appointment.Notes = this.notes;
  }
  private getAppointment(id: number) {
    if (id === 0) {
      this.appointment = {
        Id: null,
        Description: '',
        Start: null,
        End: null,
        Notes: [''],
        Party: [],
        ProviderEmail: 'vimikp@gmail.com'
      };
    } else {
      this.path = "http://devtechtest.previewourapp.com/api/Appointment/" + id + "?" + "providerEmail=vimikp@gmail.com";
      this._appointmentservice.getAppointment(this.path).subscribe((data) => this.appointment = data);
    }
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this._appointmentservice.selectedAppointment = {

      Id: null,
      Description: '',
      Start: null,
      End: null,
      Notes: [''],
      Party: [],
      ProviderEmail: 'vimikp@gmail.com'

    }

  }

  onSubmit(form: NgForm) {

    console.log("In onSubmit");
    console.log(form.value);
    if (form.value.Id == null) {

      this._appointmentservice.postAppointment(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this._appointmentservice.getAppointments();
        })
    }
    else {
      let id = +this._route.snapshot.paramMap.get('id');
      this.path = "http://devtechtest.previewourapp.com/api/Appointment/" + id + "?" + "providerEmail=vimikp@gmail.com";
      this._appointmentservice.putAppointment(this.path, form.value)
        .subscribe(data => {
          this.resetForm(form);
          this._appointmentservice.getAppointments();
        });
    }
  }

}


