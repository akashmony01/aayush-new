import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../_guards/authentication.service';
import { Constants } from '@app/common/constants';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    public authToken: any ;
    public headers: any;

    constructor(private http: HttpClient, public authenticationService: AuthenticationService) {
        const userdata = JSON.parse(localStorage.getItem('user-access'));
        if(userdata && userdata.jwtToken){
            this.authToken = 'Bearer ' + userdata.jwtToken.toString();
        }
    }

    addAdmin(adminData) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_CREATE_NEWADMIN_V2}`, adminData, { headers });
    }

    getAllRoles() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken
        });
        return this.http.get(`${Constants.API_GET_ALL_ROLES}`, { headers });

    }

    addMyCriticAdmin(adminData){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken,
            appId: 'HOSPITAL'
        });
        return this.http.post(`${Constants.API_CREATE_NEWADMIN_MYCRITIC}`, adminData, { headers });

    }

    updatedynamicTemplate(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_UPDATE_DYNAMIC_TEMPLATE}`, body, { headers });
    }

    updatePassword(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_UPDATE_PASSWORD}`, body, { headers });
    }

    getAdminDetails(postBody) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken
        });
        // return this.http.get(`${Constants.API_ADMIN}/${id}`, { headers });
        return this.http.post(`${Constants.API_ADMIN_FLAGS}`, postBody, { headers });
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    getAdminWrtAdminId(id) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken
        });

        return this.http.get(`${Constants.API_ADMIN}/${id}`, { headers });

    }
    
    updateAdminFlag(postBody) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken
        });
        // return this.http.get(`${Constants.API_ADMIN}/${id}`, { headers });
        return this.http.post(`${Constants.API_ADMIN_UPDATEFLAGS}`, postBody, { headers });
    }

    customerEndScreen(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_UPDATE_STATUSSCREEN}`, body, { headers });
    }

    enableReminders(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_ENABLE_REMINDERS}`, body, { headers });
    }

    updateSubscription(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_UPDATE_SUBSCRIPTION}`, body, { headers });
    }
}
