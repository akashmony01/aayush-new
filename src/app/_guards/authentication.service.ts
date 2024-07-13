import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Constants } from '@app/common/constants';


const TOKEN_KEY = 'user-access';

const REFRESH_TOKEN = 'refresh_token';


@Injectable({
  providedIn: 'root'

})
export class AuthenticationService {
  public user: Observable<any>;

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  public username: String;
  public password: String;
  public userInfo: any;
  parsedUserInfo: any;
  authenticatedUser: any;
  currentUserSubject: BehaviorSubject<any>;
  role: any;
  businesstype: any;
  currentuser: Object;
  public auth_token: any;



  constructor(private http: HttpClient,private storage: Storage, private router: Router ) {
    this.loadUser();
    this.currentUserSubject = new BehaviorSubject(null);
    this.user = this.currentUserSubject.asObservable().pipe(
        filter(response => response)

    );

  }

  public get currentUserValue() {

    return this.currentUserSubject.value;
  }


  signIn(loginData): Observable<any> {

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //    appId:'skipline'
    // })

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // appId:'skipline',
    })

    let url = 'https://api.mycritic.org:4443/identity/api/login';
    // url = 'https://localhost:4443/identity/api/login';
    // url = 'http://localhost:9443/api/login';
    return this.http.post(`${Constants.API_LOGIN}`, loginData,{headers})
        .pipe(map(user => {
          this.userInfo = user ;
          let str1 = new String( "Bearer " );
          let str2 = new String(this.userInfo.jwtToken );
          this.auth_token = str1.concat(str2.toString());
          this.currentUserSubject.next(user);
          this.storage.set(TOKEN_KEY,JSON.stringify(this.userInfo));
          localStorage.setItem(TOKEN_KEY,JSON.stringify(this.userInfo));
          return(user);
        }));
  }

  signInNew(loginData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: ''
    });

    return this.http.post(`${Constants.API_LOGIN}`, loginData,{headers})
        .pipe(map(user => {
          this.userInfo = user ;
          this.auth_token = `Bearer ${this.userInfo.jwtToken}`;
          this.currentUserSubject.next(user);
          this.storage.set(TOKEN_KEY, JSON.stringify(this.userInfo));
          localStorage.setItem(TOKEN_KEY, JSON.stringify(this.userInfo));
          return(user);
        }));
  }

  loadToken() {
    this.auth_token = JSON.parse(localStorage.getItem('user-access')).jwtToken;
    this.username = JSON.parse(localStorage.getItem('user-access')).username;
    this.password = '';
    return;
  }

  initLogin() {

  }

  loadUser() {
    this.storage.get(TOKEN_KEY).then(data => {
      if (data) {
        return this.currentUserSubject.next(data);
      }
    });

  }


  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }



  async logout() {
    localStorage.setItem(TOKEN_KEY, null);
    this.currentUserSubject.next(null);
    await this.router.navigateByUrl('/login');
  }
}
