import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../_guards/authentication.service';
import { Constants } from '@app/common/constants';

@Injectable({
    providedIn: 'root'
})
export class LabPharmacyService {
    public authToken: any;
    public headers: any;

    constructor(private http: HttpClient, public authenticationService: AuthenticationService) {
        const userdata = JSON.parse(localStorage.getItem('user-access'));
        this.authToken = `Bearer ${userdata.jwtToken}`;
    }

    getAllAdminsByRole(roleId) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken
        });
        return this.http.get(`${Constants.API_GET_ALL_ADMIN_BY_ROLE}?roleId=${roleId}`, {headers});
    }

    downloadFile(appointmentId, uniqueId) {
        window.open(`${Constants.API_DOWNLOAD_FILE}?appointmentId=${appointmentId}&id=${uniqueId}`);
    }

    createPrescription(prescription) {
        const headers = new HttpHeaders({
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_CREATE_PRESCRIPTION}`, prescription, {headers});
    }

    uploadPrescription(prescriptionFile, prescriptionId, filename) {
        const headers = new HttpHeaders({
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_UPLOAD_PRESCRIPTION_FILE}?prescriptionId=${prescriptionId}&filename=${filename}`, prescriptionFile, {headers});
    }

    createLabRequest(labRequest) {
        const headers = new HttpHeaders({
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_CREATE_LAB_REQUEST}`, labRequest, {headers});
    }

    uploadLabRequest(labRequestFile, labRequestId, filename) {
        const headers = new HttpHeaders({
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_UPLOAD_LAB_REQUEST_FILE}?labRequestId=${labRequestId}&filename=${filename}`, labRequestFile, {headers});
    }

    uploadLabReport(labReportFile, labRequestId, filename) {
        const headers = new HttpHeaders({
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_UPLOAD_LAB_REPORT_FILE}?labRequestId=${labRequestId}&filename=${filename}`, labReportFile, {headers});
    }

    getActiveLabRequestsByLabId(labId, status) {
        const headers = new HttpHeaders({
            Authorization: this.authToken
        });
        return this.http.get(`${Constants.API_GET_LAB_REQUESTS_LAB_ID}?labId=${labId}&status=${status}`, {headers});
    }

    getLabRequestsByAppointmentId(appointmentId) {
        const headers = new HttpHeaders({
            Authorization: this.authToken
        });
        return this.http.get(`${Constants.API_GET_LAB_REQUESTS_APPOINTMENT_ID}?id=${appointmentId}`, {headers});
    }

    getPrescriptionsByAppointmentId(appointmentId) {
        const headers = new HttpHeaders({
            Authorization: this.authToken
        });
        return this.http.get(`${Constants.API_GET_PRESCRIPTION_APPOINTMENT_ID}?id=${appointmentId}`, {headers});
    }

    getActivePrescriptionsByPharmacyIdAndStatus(pharmacyId, status ) {
        const headers = new HttpHeaders({
            Authorization: this.authToken
        });
        return this.http.get(`${Constants.API_GET_PRESCRIPTION_PHARMACY_ID}?pharmacyId=${pharmacyId}&status=${status}`, {headers});

    }

    updatePrescription(prescription) {
        const headers = new HttpHeaders({
            Authorization: this.authToken
        });
        return this.http.put(`${Constants.API_UPDATE_PRESCRIPTION}`, prescription, {headers});
    }

    updateLabRequest(labRequest) {
        const headers = new HttpHeaders({
            Authorization: this.authToken
        });
        return this.http.put(`${Constants.API_UPDATE_LAB_REQUEST}`, labRequest, {headers});
    }
 }
