import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '@app/common/constants';

@Injectable({
    providedIn: 'root'
})
export class AppointmentFileService {
    constructor(private http: HttpClient) {
    }

    getFilesWithoutAuth(uniqueId) {
        return this.http.get(`${Constants.API_GET_ALL_FILES_NO_AUTH}?id=${uniqueId}`);
    }

    downloadFile(appointmentId, uniqueId) {
        window.open(`${Constants.API_DOWNLOAD_FILE}?appointmentId=${appointmentId}&id=${uniqueId}`);
    }
}
