import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Constants } from '@app/common/constants';

@Injectable({
  providedIn: 'root'
})
export class TimeslotService {
  constructor(private http: HttpClient) {
  }

  getTimeSlotData(postBody){
    return this.http.post(`${Constants.TIME_SLOT}`,postBody,{});
  }  
}
