import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from '@app/common/constants';

@Injectable({
    providedIn: 'root'
})
export class DoctorListService {
    authToken: any;
    info: any;

    constructor(private http: HttpClient) {
        const userData = JSON.parse(localStorage.getItem('user-access'));
        const bearerPrefix = String( 'Bearer ' );
        const jwtToken = userData.jwtToken;
        this.authToken = bearerPrefix.concat(jwtToken.toString());
    }

    getDoctorsByAdmin(adminId) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: Constants.APP_NAME,
            Authorization: this.authToken
        });
        return this.http.get(`${Constants.API_GET_DOCTORS_BY_ADMIN}/${adminId}`, { headers });
    }

    addDoctorByAdmin(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: Constants.APP_NAME,
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_ADD_DOCTOR_BY_ADMIN}`, body, { headers });
    }

    updateDoctorByAdmin(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: Constants.APP_NAME,
            Authorization: this.authToken
        });
        return this.http.put(`${Constants.API_UPDATE_DOCTOR}`, body, { headers });
    }

    deleteDoctor(doctorId) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: Constants.APP_NAME,
            Authorization: this.authToken
        });
        return this.http.put(`${Constants.API_DELETE_DOCTOR}/${doctorId}`, { headers });
    }

    getAppointmentsBydcotorAndDate(body){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: Constants.APP_NAME,
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_GET_APPOINTMNETS_DOCTORID_DATE}`, body, { headers });
    }

    getDoctorByDoctorAdminId(doctorAdminId){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: Constants.APP_NAME,
            Authorization: this.authToken
        });
        return this.http.get(`${Constants.API_GET_DOCTOR_BY_DOCTOR_ADMIN_ID}/${doctorAdminId}`, { headers });
    }
    

}
