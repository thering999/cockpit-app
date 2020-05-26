import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class KpiQtService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /* getKpiDropdown(stg_id, stg_grp_id) {
       return new Promise((resolve, reject) => {
           this.http.get(`${this.url}/chart_view/${stg_id}`)
               .map(res => res.json())
               .subscribe(data => {
                   resolve(data);
               }, error => {
                   reject(error);
               })
       })
   }*/
    /*  
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
  }  */

    //get    
    //  ggetKpiQtDataPromis() {
    //     let results: any = [];
    //     let promise = new Promise((resolve, reject) => {
    //        // let url = `${this.url}/quater/amp`;
    //         //let headers = new Headers({ 'Content-Type': 'application/json' });
    //         //let options = new RequestOptions({ headers: headers });
    //         // let body = { token: '1234567890smartrefer', datebegin: datebegin, dateend: dateend };
    //       //this.http.post(url, options)
    //       this.http.get(`${this.url}/quater/amp`)  
    //             .toPromise()
    //             .then(
    //                 res => { // Success
    //                 console.log(res.json());
    //                 resolve(res.json());
    //             }
    //         )
    //             .catch(this.handleError);
    //     });
    //     return promise;

    //     }
    //post   
    getKpiProvQtDataPromis(kpi_id) {
        //let results: any = [];
        let promise = new Promise((resolve, reject) => {
            let url = `${this.url}/quater/prov`;
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = { kpi: kpi_id };
            //this.http.post(url, options)
            this.http.post(url, body, options)
                .toPromise()
                .then(
                    res => { // Success
                        console.log(res.json());
                        resolve(res.json());
                    }
                )
                .catch(this.handleError);
        });
        return promise;

    }
    getKpiAmpQtDataPromis(kpi_id) {
        //let results: any = [];
        let promise = new Promise((resolve, reject) => {
            let url = `${this.url}/quater/amp`;
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = { kpi: kpi_id };
            //this.http.post(url, options)
            this.http.post(url, body, options)
                .toPromise()
                .then(
                    res => { // Success
                        console.log(res.json());
                        resolve(res.json());
                    }
                )
                .catch(this.handleError);
        });
        return promise;

    }
    getKpiAmpOneQtDataPromis(kpi_id, amp_id) {
        //console.log(amp_id);
        //let results: any = [];
        let promise = new Promise((resolve, reject) => {
            let url = `${this.url}/quater/ampOne`;
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = { kpi: kpi_id, ampurId: amp_id };
            //this.http.post(url, options)
            this.http.post(url, body, options)
                .toPromise()
                .then(
                    res => { // Success
                        //console.log(res.json());
                        resolve(res.json());
                    }
                )
                .catch(this.handleError);
        });
        return promise;

    }
    getKpiOffQtDataPromis(kpi_id,amp_id) {
        //let results: any = [];
        let promise = new Promise((resolve, reject) => {
            let url = `${this.url}/quater/off`;
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = { kpi: kpi_id, ampurId: amp_id  };
            //this.http.post(url, options)
            this.http.post(url, body, options)
                .toPromise()
                .then(
                    res => { // Success
                        //console.log(res.json());
                        resolve(res.json());
                    }
                )
                .catch(this.handleError);
        });
        return promise;

    }





}
