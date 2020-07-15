import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable()
export class PortalService {

  constructor(private http: HttpClient) { }

}
