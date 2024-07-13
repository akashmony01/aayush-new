import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '@app/common/constants';
import {Appointment} from '@app/models/Appointment';
import {Opinion} from '@app/models/Opinion';

@Injectable({
    providedIn: 'root'
})
export class FeedbackDashboardService {
    authToken: any;
    // url_getMycriticFeedbackOptions = 'https://api.mycritic.org:8443/opinion/getCustomOpinions' ;
    // url_saveMycriticFeedbackOptions ='https://api.mycritic.org:8443/opinion/saveCustomOpinions';
    info: any;

    constructor(private http: HttpClient) {
        const userData = JSON.parse(localStorage.getItem('user-access'));
        const bearerPrefix = String( 'Bearer ' );
        const jwtToken = userData.jwtToken;
        this.authToken = bearerPrefix.concat(jwtToken.toString());
    }

    getAdminsWRTOrgId(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: 'HOSPITAL',
            Authorization: this.authToken
        });

        return this.http.post(Constants.API_FEEDBACK_GET_ADMINS_FOR_ORG, body, { headers });
    }


    getAllFeedbackResponses(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: 'MYCRITIC',
            Authorization: this.authToken
        });
        return this.http.post(Constants.API_FEEDBACK_USP_RESPONSES, body, { headers });

    }

    getFeedbackResponses(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: 'MYCRITIC',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_FEEDBACK_USP_RESPONSES}`, body, { headers });
    }



    getComments(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: 'MYCRITIC',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_FEEDBACK_GET_DASHBOARDCOMMENTS}`, body, { headers });

    }

    getAllOpinions(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: 'MYCRITIC',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_FEEDBACK_GET_ALLOPINIONCOUNTS }`, body, { headers });
    }

    getDaysOpinions(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: 'MYCRITIC',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_FEEDBACK_GET_DAYSOPINIONCOUNTS}`, body, { headers });
    }

    getGraphResponses(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: 'MYCRITIC',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_FEEDBACK_USP_GRAPHRESPONSES}`, body, { headers });
    }

    getMycriticFeedbackOptions(id) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: 'MYCRITIC',
            Authorization: this.authToken
        });
        return this.http.get<Opinion[]>(`${Constants.API_FEEDBACK_GETCUSTOMOPINIONS}/${id}`, { headers });

    }

    saveMycriticFeedbackOptions(body, id) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: 'MYCRITIC',
            Authorization: this.authToken
        });
        return this.http.post(`${Constants.API_FEEDBACK_SAVECUSTOMOPINIONS}/${id}`, body, { headers });
    }

    addOpinion(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: 'MYCRITIC',
            Authorization: this.authToken
        });
        return this.http.post<Opinion>(`${Constants.API_ADD_OPINION}`, body, { headers });
    }

    updateOpinion(body) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            appId: 'MYCRITIC',
            Authorization: this.authToken
        });
        return this.http.put<Opinion>(`${Constants.API_FEEDBACK_OPTIONS}/${body.opinionId}`, body, { headers });
    }
}

