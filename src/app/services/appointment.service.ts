import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../_guards/authentication.service';

import {Appointment} from "@app/models/Appointment";
import { Constants } from '@app/common/constants';


const APPOINTMENT = 'appointment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  public auth_token: any;
  public headers: any


  queueItem: any;


  url_addAppointment = 'https://api.mycritic.org:4443/skipline/appointment/newAddAppointment';

  public coustmerList: any;


  constructor(private http: HttpClient, public authenticationService: AuthenticationService) {
    let userdata = JSON.parse(localStorage.getItem('user-access'));
    var str1 = new String("Bearer ");
    var str2 = userdata.jwtToken;
    this.auth_token = str1.concat(str2.toString());
  }

  getAllAppoinments(allAppointmens) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })

    return this.http.post(`${Constants.API_GET_ALL_APPOINTMENTS}`, allAppointmens, {headers: headers});
  }

  getAppoinments(appointmens) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })

    return this.http.post(`${Constants.API_GET_APPOINTMENTS}`, appointmens, {headers: headers});

  }

  getWeekAppoinments(adminId){
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.auth_token
      })
    return this.http.get(`${Constants.API_GET_WEEK_APPOINTMENTS}/${adminId}`, {headers});
  }

  updateAppointment(appointment) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.post(`${Constants.API_UPDATE_APPOINTMENT}`, appointment, {headers});
  }

  updateAppointmentV2(appointment) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.post(`${Constants.API_UPDATE_APPOINTMENT_V2}`, appointment, {headers});
  }

  updateAppointmentStatus(appointmentStatus) {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    return this.http.post(`${Constants.API_UPDATE_APPOINTMENT_STATUS}`, appointmentStatus, {headers: headers});

  }
  updateAppointmentByDoctor(appointment){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    });
    return this.http.post(`${Constants.API_UPDATE_APPOINTMENT_BY_DOCTOR}`, appointment, {headers: headers});
  }

  addnewAppointment(customerData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    return this.http.post(`${Constants.API_ADD_APPOINTMENT}`, customerData, {headers: headers});
  }

  addAppointmentV2(appointment) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
    return this.http.post(`${Constants.API_ADD_APPOINTMENT_V2}`, appointment, {headers});
  }

  getFiles(appointmentId) {
    const headers = new HttpHeaders({
      'Authorization': this.auth_token
    });
    return this.http.get(`${Constants.API_GET_ALL_FILES}?appointmentId=${appointmentId}`, {headers});
  }

  deleteFile(appointmentId, uniqueId) {
    const headers = new HttpHeaders({
      'Authorization': this.auth_token
    });
    return this.http.post(`${Constants.API_DELETE_FILE}?appointmentId=${appointmentId}&id=${uniqueId}`, null,{headers});
  }
  downloadFile(appointmentId, uniqueId) {
    window.open(`${Constants.API_DOWNLOAD_FILE}?appointmentId=${appointmentId}&id=${uniqueId}`);
  }

  uploadFile(file, appointmentId, fileName, done) {
    const headers = new HttpHeaders({
      'Authorization': this.auth_token
    });
    return this.http.post(`${Constants.API_UPLOAD_FILE}?appointmentId=${appointmentId}&filename=${fileName}&done=${done}`, file, {headers});
  }

  uploadFiles(files, container, appointmentId, fileNames) {
    const headers = new HttpHeaders({
      'Authorization': this.auth_token
    });
    return this.http.post(`${Constants.API_UPLOAD_MULTIPLE_FILES}?appointmentId=${appointmentId}&container=${container}&fileNames=${fileNames}`, files, {headers});
  }

  createZoomMeeting(appointmentId, doctorId, meetingAgenda, startTime, invitees) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization: this.auth_token
    });
    const body = new URLSearchParams();
    body.append('appointmentId', appointmentId);
    body.append('doctorId', doctorId);
    body.append('meetingAgenda', meetingAgenda);
    body.append('startTime', startTime);
    body.append('invitees', invitees);

    return this.http.post(`${Constants.API_ZOOM_CREATE_MEETING}`, body.toString(), {headers});
  }

  createPrescription() {
    const headers = new HttpHeaders({
      'Authorization': this.auth_token
    });
    // return this.http.post(`${Constants.API_UPLOAD_MULTIPLE_FILES}?appointmentId=${appointmentId}&container=${container}&fileNames=${fileNames}`, files, {headers});
  }

  uploadPrescription() {

  }

  createLabRequest() {

  }

  uploadLabRequest() {

  }

  getZoomMeetings(appointmentId) {
    const headers = new HttpHeaders({
      Authorization: this.auth_token
    });
    return this.http.get(`${Constants.API_ZOOM_GET}/${appointmentId}`, {headers});
  }

  getReasons() {
    const headers = new HttpHeaders({
      Authorization: this.auth_token
    });
    return this.http.get(`${Constants.API_APPOINTMENT}/medicalSymptoms`, {headers});
  }

  deleteVital(id) {
    const headers = new HttpHeaders({
      Authorization: this.auth_token
    });
    return this.http.delete(`${Constants.API_DELETE_PATIENT_VITALS_ID}/${id}`, {headers});

  }
  addMedicalSymptom(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    });
    return this.http.post(`${Constants.API_ADD_PATIENT_SYMPTOMS}`, body, { headers });

  }

  deleteMedicalSymptom(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    });
    return this.http.delete(`${Constants.API_DELETE_SYMPTOMS}/${id}`, { headers });
  }
}
