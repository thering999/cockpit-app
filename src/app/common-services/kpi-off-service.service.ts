import { Injectable,Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
  
export class KpiOffServiceService {

  constructor(
    @Inject('API_URL') private url: string,
    private http: Http
  ) { }

  getKpiOff( kpi_id,ampId) {
    return new Promise((resolve, reject) => {
        let url = `${this.url}/view/office`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = { amp_id: ampId, kpi_id: kpi_id};
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

}
