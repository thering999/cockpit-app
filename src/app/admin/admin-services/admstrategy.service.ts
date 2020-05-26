import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()
export class AdmstrategyService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }

    getStg(stg_group_id) {/* เพื่อดึงข้อมูล stg ตามที่เลือก */
        return new Promise((resolv, reject) => {
            this.http.get(`${this.url}/stglist/${stg_group_id}`) /*เรียกมาจาก common-services*/
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })

    }
    getAlladmstrategy() {
        return new Promise((resolv, reject) => {
            this.http.get(`${this.url}/stglist`) /*เรียกมาจาก common-services*/
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAlluser() {
        return new Promise((resolv, reject) => {
            this.http.get(`${this.url}/userlist`) /*เรียกมาจาก common-services*/
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getallstggroup() {
        return new Promise((resolv, reject) => {
            this.http.get(`${this.url}/stggroup`) /*เรียกกลุ่มมาจาก common-services*/
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    save(adminstg_id: any,
        adminstg_group_id: any,
        adminstg_name: any,
        adminstg_detail: any,
        adminstg_own: any,
        adminstg_status: any

    ) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/stglist`, {
                stg_id: adminstg_id,
                stg_grp_id: adminstg_group_id,
                stg_name: adminstg_name,
                stg_detail: adminstg_detail,
                stg_own: adminstg_own,
                stg_status: adminstg_status
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    edit(adminstg_id: any,
        adminstg_group_id: any,
        adminstg_name: any,
        adminstg_detail: any,
        adminstg_own: any,
        adminstg_status: any
    ) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.url}/stglist`, {
                stg_id: adminstg_id,
                stg_grp_id: adminstg_group_id,
                stg_name: adminstg_name,
                stg_detail: adminstg_detail,
                stg_own: adminstg_own,
                stg_status: adminstg_status
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    remove(adminstg_id: any) {
        return new Promise((resolve, reject) => {
            this.http.delete(`${this.url}/userlevel/${adminstg_id}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
}
