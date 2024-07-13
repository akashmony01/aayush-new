import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../_guards/authentication.service';
import { Storage } from '@ionic/storage';
import { Constants } from '@app/common/constants';

@Injectable({
  providedIn: 'root'
})

export class ToplineService {

  public authToken: any ;
  public headers: any;
  private doctorsApiEndPoint = '/hospitaltoplinemetrics/doctors';
  userInfo: any;

  constructor(private http: HttpClient, public authenticationService: AuthenticationService,
              private storage: Storage) {
    const userData = JSON.parse(localStorage.getItem('user-access'));
    const bearerPrefix = String( 'Bearer ' );
    const jwtToken = userData.jwtToken;
    this.authToken = bearerPrefix.concat(jwtToken.toString());
  }

  // Get Full list of Admins
  getAllAdmins(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_DASHBOARD_ADMIN}`, body, { headers });
  }

  getTotalAppointmentsByHospital(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_TOPLINE_DASHBOARD_TOTAL_APPOINTMENTS}`, body, { headers })
  }

  getCompletedAppointmentsByHospital(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_TOPLINE_DASHBOARD_COMPLETED_APPOINTMENTS}`, body, { headers })
  }

  getCancelledAppointmentsByHospital(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_TOPLINE_DASHBOARD_CANCELLED_APPOINTMENTS}`, body, { headers })
  }

  getNoshowAppointmentsByHospital(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_TOPLINE_DASHBOARD_NOSHOW_APPOINTMENTS}`, body, { headers })
  }

  getActiveAppointmentsByHospital(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_TOPLINE_DASHBOARD_ACTIVE_APPOINTMENTS}`, body, { headers })
  }

  getTopReasonsByHospital(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_TOPLINE_DASHBOARD_TOP_REASONS}`, body, { headers })
  }

  // Topline Doctors data
  getToplineDoctorsByHospital(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_TOPLINE_DASHBOARD_DOCTORS}`, body, { headers });
  }

  getToplineGenderByHospital(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_TOPLINE_DASHBOARD_GENDER}`, body, { headers });
  }

  getToplineAgeByHospital(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_TOPLINE_DASHBOARD_AGE}`, body, { headers });
  }

}

