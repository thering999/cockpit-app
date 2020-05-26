import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class KpiProvService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }
    getKpiDropdown(stg_id, stg_grp_id) {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}/chart_view/${stg_id}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getKpiId(stg_id) {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}/chart_view/kpiId/${stg_id}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getKpiProv(prov_id, stg_id, stg_grp_id) {
        return new Promise((resolve, reject) => {
            let url = `${this.url}/view`;
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = { prov_id: prov_id, kpi_stg_id: stg_id, stg_grp_id: stg_grp_id };
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

                    console.log(data);
                }, error => {
                    reject('Connection error');
                });
        });
    }
    getChartCompare(kpi_id) {
        return new Promise((resolve, reject) => {
            let url = `${this.url}/view/ampur`;
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = { kpi_id: kpi_id };
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
    showDetailByAmpur(kpi_id) {
        return new Promise((resolve, reject) => {
            let url = `${this.url}/view/ampur`;
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = {  kpi_id: kpi_id };
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




}
