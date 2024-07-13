import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../_guards/authentication.service';
import { Storage } from '@ionic/storage';
import { Constants } from '@app/common/constants';

@Injectable({
  providedIn: 'root'
})

export class PerformanceService {

  public authToken: any ;
  public headers: any;
  userInfo: any;

  constructor(private http: HttpClient, public authenticationService: AuthenticationService,
              private storage: Storage) {
    const userData = JSON.parse(localStorage.getItem('user-access'));
    const bearerPrefix = String( 'Bearer ' );
    const jwtToken = userData.jwtToken;
    this.authToken = bearerPrefix.concat(jwtToken.toString());
  }

  getTopAppointmentHospitals(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_PERFORMANCE_DASHBOARD_TOP_APPOINTMENTS}`, body, { headers })
  }

  getBottomAppointmentHospitals(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_PERFORMANCE_DASHBOARD_BOTTOM_APPOINTMENTS}`, body, { headers })
  }

  getTopTreatingDoctors(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_PERFORMANCE_DASHBOARD_TOP_DOCTORS}`, body, { headers })
  }

  getBottomTreatingDoctors(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_PERFORMANCE_DASHBOARD_BOTTOM_DOCTORS}`, body, { headers })
  }

  getTopReasons(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_PERFORMANCE_DASHBOARD_TOP_REASONS}`, body, { headers })
  }

  getBottomReasons(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_PERFORMANCE_DASHBOARD_BOTTOM_REASONS}`, body, { headers })
  }

  getGoodFeedbackHospitals(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_PERFORMANCE_DASHBOARD_GOOD_FEEDBACK}`, body, { headers })
  }

  getBadFeedbackHospitals(body){
    const headers = new HttpHeaders({
      'Consent-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_PERFORMANCE_DASHBOARD_BAD_FEEDBACK}`, body, { headers })
  }

}

