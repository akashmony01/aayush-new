import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../_guards/authentication.service';
import { Constants } from '@app/common/constants';

@Injectable({
  providedIn: 'root'
})
export class QueueServiceService {
  public authToken: any ;
  public headers: any;

  constructor(private http: HttpClient, public authenticationService: AuthenticationService) {
    const userdata = JSON.parse(localStorage.getItem('user-access'));
    const str1 = 'Bearer ';
    const str2 = userdata.jwtToken;
    this.authToken = str1.concat(str2.toString());
  }

  getAllQueuesByAdminId(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_QUEUE_GETALLQUEUESBY_ADMINID}`, body, { headers });
  }

  addQueue(queueData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_ADD_QUEUE}`, queueData, { headers });
  }

  addQueueV2(queueData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_ADD_QUEUE_V2}`, queueData, { headers });
  }

  updateQueue(queueData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_UPDATE_QUEUE}`, queueData, { headers });
  }

  updateQueueV2(queueData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_UPDATE_QUEUE_V2}`, queueData, { headers });
  }

  inActivateQueue(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_INACTIVATE_QUEUE}`, body, { headers });
  }

  getQueueSchedules(queueId) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.get(`${Constants.API_GET_QUEUE_SCHEDULE}/${queueId}`, { headers });
  }
}
