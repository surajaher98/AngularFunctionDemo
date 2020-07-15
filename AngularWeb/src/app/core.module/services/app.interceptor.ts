import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, takeUntil, finalize , tap, catchError } from 'rxjs/operators';
import { ConfigProvider } from './config-provider';
import { LoaderService } from './loader.service';

export class AppInterceptor implements HttpInterceptor {
    constructor(@Inject(Router) private router: any,
        @Inject(LoaderService) private loaderService: any, @Inject(ConfigProvider) private appConfig: any) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let httpHeaders = req.headers.set('Content-Type', 'application/json');
        this.loaderService.showLoader(true);
        httpHeaders = httpHeaders
            .append('Authorization', 'Basic ' + btoa(this.appConfig.getConfig('basicKey') + ':' + this.appConfig.getConfig('basicPwd')));

        const newReq = req.clone({
            headers: httpHeaders
        });

        return next.handle(newReq).pipe(tap((ev: HttpEvent<any>) => {
        })).pipe(
            catchError(response => {
                return Observable.throw(response);
            })).pipe(
            finalize(() => this.loaderService.showLoader(false)));
    }
}
