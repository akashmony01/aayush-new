import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { catchError, first, switchMap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { AlertController } from '@ionic/angular';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, 
        private alertctrl: AlertController) { }
    intercept1(request: HttpRequest<any>, next: HttpHandler): Observable<any>
    {
        const user = this.authenticationService.currentUserValue;
        const isLoggedIn = user && user.jwtToken;
        if (isLoggedIn 
            && (request.url.indexOf('login') == -1 || request.url.indexOf('getOrderByUniqueId') == -1 )) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${user.jwtToken}` }
            });
        }
        else {
            request = request.clone({
                setHeaders: {}
            });
        }
        return next.handle(request).pipe(catchError(error => {
            return this.handleResponseError(error, request, next);
        })); 
    }

    refreshToken(): Observable<any> {
        const user = this.authenticationService.currentUserValue;
        const postBody = {
            username: user.username,
            password: '',
            jwt: user.jwtToken
            }
        return this.authenticationService.signInNew(postBody);
    }

    handleResponseError(error, request?, next?) {
        if (request.url.indexOf('login') == -1 && 
           ( error.status === 401 || error.status === 403)) {
            return this.refreshToken().pipe(
                switchMap(() => {
                    const user = this.authenticationService.currentUserValue;
                    const isLoggedIn = user && user.jwtToken;
                    if (isLoggedIn) {
                        request = request.clone({
                            setHeaders: { Authorization: `Bearer ${user.jwtToken}` }
                        });
                    }
                    return next.handle(request);
                }),
                catchError(e => {
                    if (e.status !== 401) {
                        
                        return throwError(e);
                    } else {
                      
                    }
                }));
        }
        if (error.status === 500) {
            if (error.error&& error.error.message) {
                this.showAlert(error.error.message);
            } else {
                this.showAlert('There has been an issue with your request. ' +
                    'Please check details and try again. If you still get the same message please contact support.');
            }
        }
        return throwError(error);
        
    }
    async showAlert(msg) {
        let alert = await this.alertctrl.create({
            header: 'Request failed!',
            message: msg,
            buttons: ['Ok']

        });
        alert.present();
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(request).pipe(catchError(error => {
            return this.handleResponseError(error, request, next);
        }));
    }
}