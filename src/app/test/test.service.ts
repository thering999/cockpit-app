import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TestService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }
    
   



}
