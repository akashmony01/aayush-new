import { Injectable } from '@angular/core';
import {Appointment} from "@app/models/Appointment";
import {Constants} from "@app/common/constants";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerId: any;
  auth_token: string;

  constructor(private http: HttpClient, private router: Router) {
    this.customerId = this.router.getCurrentNavigation().extras.state;
    
    this.getCustomerHistory(this.customerId);
    let userdata= JSON.parse(localStorage.getItem('user-access'));
    var str1 = new String( "Bearer " );
    var str2 = userdata.jwtToken;
    this.auth_token = str1.concat(str2.toString());
  }

  addCustomer(customer: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    })
    return this.http.post(`${Constants.API_ADD_CUSTOMER}`, customer, { headers });
  }

  getCustomers(body){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    return this.http.post<Appointment[]>(`${Constants.API_CUSTOMER_BY_ADMIN_ID}`,body, { headers: headers })
  }

  getCustomerById(id){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    })
    return this.http.get(`${Constants.API_CUSTOMER}/${id}`, { headers });
  }

  updateCustomerById(id, customer) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    })
    return this.http.put(`${Constants.API_CUSTOMER}/${id}`, customer, { headers });
  }

  getCustomerHistory(customerId){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    const postData = {
      customerId: customerId
    };
    return this.http.post<Appointment[]>(`${Constants.API_CUSTOMER_HISTORY}`, postData, { headers: headers });
  }

  searchCustomersByPhone(phoneNumber: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    const postData = {
      phoneNumber
    };
    return this.http.post<Appointment[]>(`${Constants.API_SEARCH_CUSTOMER_BY_PHONE}`, postData, { headers });
  }

  searchCustomersByAadhaarPhoneName(tag: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    const postData = {
      tag
    };
    return this.http.post<Appointment[]>(`${Constants.API_SEARCH_CUSTOMER_BY_AADHAAR_PHONE_NAME}`, postData, { headers });
  }

  getCustomerApptAndClaimHistory(customerId){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    const postData = {
      customerId: customerId
    };
    return this.http.post<Appointment[]>(`${Constants.API_CUSTOMER_APPT_CLAIM_HISTORY}`, postData, { headers: headers });
  }

  sendPromotions(body){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    return this.http.post(`${Constants.API_SEND_PROMOTIONS}`,body,{ headers: headers });

  }

  getPatientSnapshotByPatientId(patientId) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    return this.http.get(`${Constants.API_GET_PATIENT_SNAPSHOT_BY_PATIENT_ID}/${patientId}`, { headers });

  }

  getPreExistingConditions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.get(`${Constants.API_CUSTOMER}/preexisting`, { headers });
  }

  getPatientVitalsInformationByAppointmentId(appointmentId) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.get(`${Constants.API_GET_PATIENT_VITALS_BY_APPT_ID}/${appointmentId}`, { headers });

  }

  addPatientVitals(body){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    return this.http.post(`${Constants.API_ADD_PATIENT_VITALS_BY_APPT_ID}`, body, { headers: headers });
  }

  addPatientPreConditions(body){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    });
    return this.http.post(`${Constants.API_ADD_PRE_EXISTING_CONDITION}`, body, { headers: headers });
  }

  deletePatientPrecondition(id){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    return this.http.delete(`${Constants.API_DELETE_PRE_EXISTING_CONDITION}/${id}`, { headers });
  }

  getAllVaccinationsList() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.get(`${Constants.API_GET_ALL_VACCINATIONS_LIST}`, { headers });
  }
  
  getVaccinationsByPatientId(patientId) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.get(`${Constants.API_GET_ALL_VACCINATIONS_LIST_BY_PATIENT_ID}/${patientId}`, { headers });
  }

  deleteVaccinationsById(Id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.delete(`${Constants.API_DELETE_PATIENT_VACCINATION}/${Id}`, { headers });
  }

  addVaccinationRecord(body) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.post(`${Constants.API_ADD_PATIENT_VACCINATION}`, body, { headers });
  } 

  getAllMedications() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.get(`${Constants.API_GET_ALL_MEDICATIONS_LIST}`, { headers });
  }

  getMedicationsByAppointmentId(appointmentId) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.get(`${Constants.API_GET_PATIENT_MEDICATION_BY_APPOINTMENT_ID}/${appointmentId}`, { headers });
  }

  getMedicationsByPatientId(patientId) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.get(`${Constants.API_GET_PATIENT_MEDICATION_BY_PATIENT_ID}/${patientId}`, { headers });
  }

  addMedicationsRecord(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.post(`${Constants.API_ADD_PATIENT_MEDICATION}`, body, { headers });
  }

  deleteMedicationRecord(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.delete(`${Constants.API_DELETE_PATIENT_MEDICATION}/${id}`, { headers });
  }

  addMedicationAllergiesRecord(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.post(`${Constants.API_ADD_PATIENT_MEDICATION_ALLERGIES}`, body, { headers });
  }

  getMedicationAllergiesPatientId(patientId) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.get(`${Constants.API_GET_PATIENT_MEDICATION_ALLERGIES_BY_PATIENT_ID}/${patientId}`, { headers });
  }

  deleteMedicationAllergiesRecord(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.delete(`${Constants.API_DELETE_PATIENT_MEDICATION_ALLERGIES}/${id}`, { headers });

  }



  }

