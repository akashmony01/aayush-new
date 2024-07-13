import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Constants } from '@app/common/constants';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private http: HttpClient) {
  }

  getInvoiceData(postBody){
    return this.http.post(`${Constants.API_GET_INVOICE}`,postBody,{});
  }  
}
