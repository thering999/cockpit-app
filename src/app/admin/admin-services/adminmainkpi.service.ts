import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()
export class AdminmainkpiService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }
    // ดึงข้อมูลตัวชี้วัดหลัก

    getAllAdminMainKpi() {
        return new Promise((resolv, reject) => {
            this.http.get(`${this.url}/stggroup`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }



    save(stg_group_id: any,
        stg_group_name: any,
        stg_group_detail: any,
        sth_group_own: any,
        stg_group_status: any,
    ) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/stggroup`, {
                stg_group_id: stg_group_id,
                stg_group_name: stg_group_name,
                stg_group_detail: stg_group_detail,
                sth_group_own: sth_group_own,
                stg_group_status: stg_group_status,
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    edit(stg_group_id: any,
        stg_group_name: any,
        stg_group_detail: any,
        sth_group_own: any,
        stg_group_status: any,
    ) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.url}/stggroup`, {
                stg_group_id: stg_group_id,
                stg_group_name: stg_group_name,
                stg_group_detail: stg_group_detail,
                sth_group_own: sth_group_own,
                stg_group_status: stg_group_status,
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    remove(stg_id: any) {
        return new Promise((resolve, reject) => {
            this.http.delete(`${this.url}/stggroup/${stg_id}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
}
