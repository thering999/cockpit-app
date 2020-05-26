import { Injectable, Inject } from '@angular/core';
import { Http ,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StggroupService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }

    getStgGroup() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}/stggroup`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getNameStgGrp(stg_grp_id) {
        return new Promise((resolve, reject) => {
            let url = `${this.url}/stggroup`;
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = {  stg_grp_id: stg_grp_id };
            this.http.post(url, body, options)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    // console.log(data);
                }, error => {
                    reject('Connection error');
                });
        });
    }
     getKpiItems() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}/kpi`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
		            //console.log(data);
                }, error => {
                    reject(error);
                })
        })
    }

}
