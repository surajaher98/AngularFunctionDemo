import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
;
import { map, catchError } from 'rxjs/operators';

import { BaseConstants } from '../constants';

@Injectable()
export class ConfigProvider {

    private config: any = null;
    private env: Object = null;

    constructor(private http: Http) { }

    public getConfig(key: any) {
        return this.config[key];
    }

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get('./assets/data/app.config.json').pipe(map((res: any) => res.json())).pipe(catchError((error: any) => {
                    reject();
                    return Observable.throw(error.json().error || 'Server error');
                }))
                .subscribe((responseData: any) => {
                    this.config = responseData['configuration'];
                    BaseConstants.baseUrl = this.config['baseUrl'];
                    BaseConstants.appConfig = this.config;
                    resolve(true);
                });
        });

    }
}
