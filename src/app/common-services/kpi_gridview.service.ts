import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class KpiGridviewService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http,
    ) { }
    getKpi(prov_id, stg_id, stg_grp_id) {
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
    getKpiAmpur(prov_id) {
        return new Promise((resolve, reject) => {
            let url = `${this.url}/view/ampur`;
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = { prov_id: prov_id };
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
