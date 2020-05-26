import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class KpiAmpurService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }

    getKpiAmpur(amp_id, stg_id, stg_grp_id) {
        return new Promise((resolve, reject) => {
            let url = `${this.url}/view/ampur`;
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = { amp_id: amp_id, kpi_stg_id: stg_id, stg_grp_id: stg_grp_id };
            this.http.post(url, body, options)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    //console.log(data);
                }, error => {
                    reject('Connection error');
                });
        });
    }
    getChartCompare(amp_id, kpi_id) {
        return new Promise((resolve, reject) => {
            let url = `${this.url}/view/office`;
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = { kpi_id: kpi_id, amp_id: amp_id };
            this.http.post(url, body, options)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);

                    console.log(data);
                }, error => {
                    reject('Connection error');
                });
        });
    }


}
