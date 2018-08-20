
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Appointment } from '../models/appointment.model';

 
@Injectable()
export class AppointmentService {
  selectedAppointment: Appointment;
  appointmentList: Appointment[];
  constructor(private http: Http) {

  }

  //Get appointment details
  getAppointment(path: string) {


    return this.http.get(path)
      .map((response: Response) => response.json());
  }

  //Create an appointment
  postAppointment(appoint: Appointment) {
    var body = JSON.stringify(appoint);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://devtechtest.previewourapp.com/api/Appointment?providerEmail=vimikp@gmail.com', body, requestOptions).map(x => x.json());
  }

  //Edit or modify an appointment
  putAppointment(path:string, appoint: Appointment) {
    var body = JSON.stringify(appoint);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(path,
      body,
      requestOptions).map(res => res.json());
  }

  //Get the list of appointments
  getAppointments(): Observable<Appointment[]> {

    return this.http.get("http://devtechtest.previewourapp.com//api/Appointment?providerEmail=vimikp@gmail.com")
                    .map((response: Response) => <Appointment[]>response.json());
  }

  //Delete an appointment
  deleteAppointment(id: number, providerEmail: string) {
    return this.http.delete('http://devtechtest.previewourapp.com/api/Appointment/' + id + providerEmail).map(res => res.json());
  }
}
