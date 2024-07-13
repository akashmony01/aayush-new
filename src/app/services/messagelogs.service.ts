import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '@app/common/constants';

@Injectable({
  providedIn: 'root'
})
export class MessagelogsService {
  authToken: string | string[];

  constructor(private http: HttpClient) {
    const userData = JSON.parse(localStorage.getItem('user-access'));
    const bearerPrefix = String('Bearer ');
    const jwtToken = userData.jwtToken;
    this.authToken = bearerPrefix.concat(jwtToken.toString());
  }
  getMessageLogs(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'appId': 'SKIPLINE',
      'Authorization': this.authToken
    });

    console.log(id, "ID")
    let url = `${Constants.MESSAGELOG}/${id}`;
    console.log(url)

    return this.http.get(`${Constants.MESSAGELOG}/${id}`, { headers: headers });
  }

  sendSvefnEmail(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    });
    return this.http.post(`${Constants.API_SEND_SVEFN_EMAIL}`, body, { headers });
  }

}