import { Component, OnInit } from '@angular/core';


import { Appointment } from '../../shared/models/appointment.model';
import { AppointmentService } from '../../shared/services/appointment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointmentList: Appointment[];
  appointment: Appointment;

  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;

    this.filteredAppointments = this.listFilter ? this.performFilter(this.listFilter) : this.appointmentList;
  }

  filteredAppointments: Appointment[];

  constructor(private _appointmentService: AppointmentService, private _router: Router, private _route: ActivatedRoute) {

    this.filteredAppointments = this.appointmentList;
    this.listFilter = "vimikp@gmail.com";
  }

  ngOnInit() {

    this._appointmentService.getAppointments()
      .subscribe((data) => this.appointmentList = data);
  }

  getAppointmentDetails(id: number) {
    this._router.navigate(['devtechtest.previewourapp.com/api/Appointment/', id]), { queryParams: { providerEmail: 'vimikp@gmail.com' } };
  }

  performFilter(filterBy: string): Appointment[] {

    filterBy = filterBy.toLocaleLowerCase();
    return this.appointmentList.filter((appointment: Appointment) => appointment.ProviderEmail.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
