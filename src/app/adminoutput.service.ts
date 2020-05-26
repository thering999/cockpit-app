import { Injectable, Inject } from '@angular/core';
import { Http ,Headers ,RequestOptions} from '@angular/http'
import { resolve } from 'path';

// import 'rxjs/add/operator/map';
// import { resolve } from 'dns';

@Injectable()
export class AdminoutputService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }
    getAllAdminOutput() {
        return new Promise((resolv, reject) => {
            this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '203', kpi_own: 'ssj01' })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    getKpiAllAmpOutput(kpi_stg_id: any, kpi_id: any) {
        return new Promise((resolv, reject) => {
            this.http.post(`${this.url}/view/ampur`, { kpi_stg_id: kpi_stg_id, kpi_id: kpi_id })
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }

    // save(adminkpi_id: any,
    //      adminkpi_stg_id: any,
    //      adminkpi_name: any,
    //      adminkpi_detail: any,
    //      adminkpi_type: any,
    //      adminkpi_scale: any,
    //      adminkpi_cal: any,
    //      adminkpi_tar: any,
    //      adminkpi_type_data : any,
    //      adminkpi_own : any,
    //      adminkpi_status : any,
    //      adminkpi_file : any,
    //      adminkpi_update : any,
    //      adminkpi_file2 : any,
    //      adminkpi_source : any,
    //      adminkpi_order : any,
    //      adminkpi_indiv : any,
    //      adminkpi_report : any,
    //      adminowner : any
    //     ){
    //     return new Promise((resolve, reject) => {
    //         this.http.post(`${this.url}/kpi`, {
    //             kpi_id: adminkpi_id,
    //             kpi_stg_id: adminkpi_stg_id,
    //             kpi_name: adminkpi_name,
    //             kpi_detail: adminkpi_detail,
    //             kpi_type: adminkpi_type,
    //             kpi_scale: adminkpi_scale,
    //             kpi_cal: adminkpi_cal,
    //             kpi_tar: adminkpi_tar,
    //             kpi_type_data : adminkpi_type_data,
    //             kpi_own : adminkpi_own,
    //             kpi_status : adminkpi_status,
    //             kpi_file : adminkpi_file,
    //             kpi_update : adminkpi_update,
    //             kpi_file2 : adminkpi_file2,
    //             kpi_source : adminkpi_source,
    //             kpi_order : adminkpi_order,
    //             kpi_indiv : adminkpi_indiv,
    //             kpi_report : adminkpi_report,
    //             owner : adminowner
    //         })
    //         .map(res => res.json())
    //         .subscribe(data => {
    //             resolve(data);
    //         }, error => {
    //             reject(error);
    //         });
    //     });
    // }

    // edit(adminkpi_id: any,
    //     adminkpi_stg_id: any,
    //     adminkpi_name: any,
    //     adminkpi_detail: any,
    //     adminkpi_type: any,
    //     adminkpi_scale: any,
    //     adminkpi_cal: any,
    //     adminkpi_tar: any,
    //     adminkpi_type_data : any,
    //     adminkpi_own : any,
    //     adminkpi_status : any,
    //     adminkpi_file : any,
    //     adminkpi_update : any,
    //     adminkpi_file2 : any,
    //     adminkpi_source : any,
    //     adminkpi_order : any,
    //     adminkpi_indiv : any,
    //     adminkpi_report : any,
    //     adminowner : any
    //    ){
    //    return new Promise((resolve, reject) => {
    //        this.http.post(`${this.url}/kpi`, {
    //            kpi_id: adminkpi_id,
    //            kpi_stg_id: adminkpi_stg_id,
    //            kpi_name: adminkpi_name,
    //            kpi_detail: adminkpi_detail,
    //            kpi_type: adminkpi_type,
    //            kpi_scale: adminkpi_scale,
    //            kpi_cal: adminkpi_cal,
    //            kpi_tar: adminkpi_tar,
    //            kpi_type_data : adminkpi_type_data,
    //            kpi_own : adminkpi_own,
    //            kpi_status : adminkpi_status,
    //            kpi_file : adminkpi_file,
    //            kpi_update : adminkpi_update,
    //            kpi_file2 : adminkpi_file2,
    //            kpi_source : adminkpi_source,
    //            kpi_order : adminkpi_order,
    //            kpi_indiv : adminkpi_indiv,
    //            kpi_report : adminkpi_report,
    //            owner : adminowner
    //        })
    //        .map(res => res.json())
    //        .subscribe(data => {
    //            resolve(data);
    //        }, error => {
    //            reject(error);
    //        });
    //    });
    // }

    // edit(adminkpi_id: any, adminkpi_stg_id: any) {
    //     return new Promise((resolve, reject) => {
    //         this.http.put(`${this.url}/kpi`, {
    //             update_id: adminkpi_id,
    //             update_data: adminkpi_stg_id
    //         })
    //         .map(res => res.json())
    //         .subscribe(data => {
    //             resolve(data);
    //         }, error => {
    //             reject(error);
    //         });
    //     });
    // }

    // remove(adminkpi_id: any) {
    //     return new Promise((resolve, reject) => {
    //         this.http.delete(`${this.url}/userlevel/${adminkpi_id}`)
    //         .map(res => res.json())
    //         .subscribe(data => {
    //             resolve(data);
    //         }, error => {
    //             reject(error);
    //         });
    //     });
    // }

}
