import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appointment Booking System';
  loadedfeature = 'appointment';

  constructor() {

  }

  onNavigate(feature: string) {
    this.loadedfeature = feature;
  }


}
