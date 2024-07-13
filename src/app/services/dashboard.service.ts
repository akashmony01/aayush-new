import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../_guards/authentication.service';
import { Storage } from '@ionic/storage';
import { Constants } from '@app/common/constants';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  public authToken: any ;
  public headers: any;
  private dashboardGraphDataApiEndPoint = '/dashboard/dashboardGraphData';
  private dashboardDaysApiEndPoint = '/dashboard/dashboardDaysData';
  private dashboardDataApiEndPoint = '/dashboard/dashboardData';
  private totalAmountCollectedApiEndPoint = '/appointment/totalAmountCollected';
  private totalAmountCollectedByDateApiEndPoint = '/appointment/daysAmountCollected';
  userInfo: any;

  constructor(private http: HttpClient, public authenticationService: AuthenticationService,
              private storage: Storage) {
    const userData = JSON.parse(localStorage.getItem('user-access'));
    const bearerPrefix = String( 'Bearer ' );
    const jwtToken = userData.jwtToken;
    this.authToken = bearerPrefix.concat(jwtToken.toString());
  }

  // graph data
  getGraphData(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_DASHBOARD_GRAPH_DATA}`, body, { headers });
  }

  // based on dates
  getQueueStatusCountsByDate(body) {
    // this.auth_token = this.authenticationService.auth_token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_DASHBOARD_DAYS_DATA}`, body, { headers });
  }

  // over all
  getTotalQueueStatusCounts(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_DASHBOARD_DATA}`, body, { headers });
  }

  //
  getTotalAmountCollected(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_DASHBOARD_TOTAL_AMOUNT_COLLECTED}`, body, { headers });
  }

  getAmountCollectedByDate(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_DASHBOARD_DAYS_AMOUNT_COLLECTED}`, body,{ headers });
  }
}

