import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '@app/common/constants';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http: HttpClient,) { }

  forgotPassword(body){
    return this.http.post(`${Constants.API_FORGOT_PASSWORD}`,body);
  
   }
  
}
