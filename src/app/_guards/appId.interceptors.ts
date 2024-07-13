import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '@app/common/constants';

@Injectable()
export class AppIdInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('appId')) {
            const modifiedReq = req.clone({
                headers: req.headers.set('appId', Constants.APP_NAME),
            });
            return next.handle(modifiedReq);
        } else {
            return next.handle(req);
        }
    }
}
