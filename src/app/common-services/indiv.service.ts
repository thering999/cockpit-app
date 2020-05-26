import { Injectable, Inject } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { AlertService } from '../alert.service';

@Injectable()
export class IndivService {
    constructor(
        @Inject("API_URL") private url: string,
        private http: Http,
        private alertService: AlertService
    ) {}

    getIndiv(kpi_id, hospcode, userLevel) {
        return new Promise((resolve, reject) => {
            let url = `${this.url}/indv`;
            let headers = new Headers({ "Content-Type": "application/json" });
            let options = new RequestOptions({ headers: headers });
            let body = {
                kpi_id: kpi_id,
                hospcode: hospcode,
                userLevel: userLevel
            };
            this.http
                .post(url, body, options)
                .map(res => res.json())
                .subscribe(
                    data => {
                        resolve(data);

                        // console.log(data);
                    },
                    error => {
                        reject("Connection error");
                        console.log("Server Error");
                        this.alertService.serverError();
                    }
                );
        });
    }

    exportIndivExcel(kpi_id, hospcode, userLevel) {
        console.log(kpi_id);
        console.log(hospcode);
        console.log(userLevel);
        return new Promise((resolve, reject) => {
            let url = `${this.url}/indv/export/excel`;
            let headers = new Headers({ "Content-Type": "application/json" });
            let options = new RequestOptions({ headers: headers });
            let body = {
                kpi_id: kpi_id,
                hospcode: hospcode,
                userLevel: userLevel
            };
            this.http
                .post(url, body, options)
                .map(res => res.json())
                .subscribe(
                    data => {
                        resolve(data);

                        // console.log(data);
                    },
                    error => {
                        reject("Connection error");
                        console.log("Server Error");
                        this.alertService.serverError();
                    }
                );
        });
    }
}
