import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '@app/common/constants';
import { Appointment } from '@app/models/Appointment';
import { BehaviorSubject } from 'rxjs';
import {OnlineAppt} from "@app/models/OnlineAppt";

@Injectable({
  providedIn: 'root'
})
export class OnlineAppointmentsService {

  private messageSource = new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();
  url = "https://api.msg91.com/api/v5/otp"
  tempdata: any = {};

  new: Appointment[] = [];

  constructor(private http: HttpClient) { }

  getOnlineAppointments(postBody){
    return this.http.post(`${Constants.API_ONLINE_APPOINTMENTS}`,postBody);

  }

  getallQueues(postBody){
    return this.http.post<OnlineAppt[]>(`${Constants.API_GETALLQUEUES}`,postBody);
  }

  getOpenSlotsQueue(postBody){
    return this.http.post(`${Constants.API_OPENSLOTS_QUEUE}`,postBody);
  }

  addnewAppointment(postData){
   return this.http.post(`${Constants.API_ONLINE_ADD_APPOINTMENT}`,postData);

  }
  
  newOnlineAppointment (newAppt){
    // this.messageSource.next(message);
    this.new.push(newAppt)

  }

  getCustomerPortal(body) {
    return this.http.post(`${Constants.API_CUSTOMER_PORTAL}`, body);

  }

  getCustomerPortalHistory(body) {
    return this.http.post(`${Constants.API_CUSTOMER_APPT_CLAIM_HISTORY}`, body);

  }

  getPatientSnapshotByPatientId(patientId) {
    return this.http.get(`${Constants.API_GET_PATIENT_SNAPSHOT_BY_PATIENT_ID}/${patientId}`);
  }

  getPatientVitalsInformationByAppointmentId(appointmentId) {
    return this.http.get(`${Constants.API_GET_PATIENT_VITALS_BY_APPT_ID}/${appointmentId}`);
  }
  
  getPatientSymptomsInformationByAppointmentId(appointmentId) {
    return this.http.get(`${Constants.API_GET_PATIENT_VISIT_SYMPTOMS}/${appointmentId}`);
  }

  getVaccinationsByPatientId(patientId) {
    return this.http.get(`${Constants.API_GET_ALL_VACCINATIONS_LIST_BY_PATIENT_ID}/${patientId}`);
  }

  getMedicationsByPatientId(patientId) {
 
    return this.http.get(`${Constants.API_GET_PATIENT_MEDICATION_BY_PATIENT_ID}/${patientId}`);
  }


  getMedicationAllergiesPatientId(patientId) {

    return this.http.get(`${Constants.API_GET_PATIENT_MEDICATION_ALLERGIES_BY_PATIENT_ID}/${patientId}`);
  }


  getOTP(postData) {
  
    return this.http.post(`${Constants.GET_OTP}`, postData);
  }

  resendOTP(postData) {
  
    return this.http.post(`${Constants.RESEND_OTP}`, postData);
  }

  verifyOTP(postData){

    return this.http.post(`${Constants.VERIFY_OTP}`,postData);

  }

  customerValidation(body) {
    return this.http.post(`${Constants.API_CUSTOMER_VALIDATION}`, body);
  }

  getFilesForAppointment(appointmentId) {
    
    return this.http.get(`${Constants.API_GET_ALL_FILES}?appointmentId=${appointmentId}`);
  }

  getCartData(postBody){
    
    return this.http.post(`${Constants.API_GET_CART}`, postBody);
  }

  downloadFile(appointmentId, uniqueId) {
    window.open(`${Constants.API_DOWNLOAD_FILE}?appointmentId=${appointmentId}&id=${uniqueId}`);
  }
}
