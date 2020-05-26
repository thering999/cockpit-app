import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConfigService } from '../common-services/config.service';


@Injectable()
export class Globals {
    glob_kpi: any = [];
    glob_ampurList: any = [];
    glob_stg_id: number;
    glob_stg_grp_id: number;
    glob_search_kpi_id: any = "";
    config: any = [];

    constructor(
        // @Inject('prov_code') private prov_code: string,
        private configService: ConfigService

    ) { }

    // glob_prov_id: string = this.config.prov_code;
    glob_province: any = [
        {
            prov_id: '34',
            prov_name: "อุบลราชธานี"
        },
        {
            prov_id: '33',
            prov_name: "ศรีสะเกษ"

        },
        {
            prov_id: '37',
            prov_name: "อำนาจเจริญ"

        },
        {
            prov_id: '35',
            prov_name: "ยโสธร"

        },
        {
            prov_id: '49',
            prov_name: "มุกดาหาร"

        }

    ]


    private stgSource = new BehaviorSubject<string>("default message");
    private stgGrpSource = new BehaviorSubject<string>("default message");
    private stgIdSource = new BehaviorSubject<string>("default message");
    private stgGrpIdSource = new BehaviorSubject<string>("default message");
    private ampurNameSource = new BehaviorSubject<string>("");
    private ampurIdSource = new BehaviorSubject<string>("");
    private kpiIdSource = new BehaviorSubject<string>("");

    stgMessage = this.stgSource.asObservable();
    stgGrpMessage = this.stgGrpSource.asObservable();
    stgIdMessage = this.stgIdSource.asObservable();
    stgGrpIdMessage = this.stgGrpIdSource.asObservable();
    ampurNameMessage = this.ampurNameSource.asObservable();
    ampurIdMessage = this.ampurIdSource.asObservable();
    kpiIdMessage = this.kpiIdSource.asObservable();

    public _listners = new Subject<any>();

    listen(): Observable<any> {
        return this._listners.asObservable();
    }

    filter(filterBy: string) {
        this._listners.next(filterBy);
    }

    changeStgName(message: any) {
        this.stgSource.next(message)
    }
    changeStgGrpName(message: string) {
        this.stgGrpSource.next(message)
    }
    changStgId(message: string) {
        this.stgIdSource.next(message)
    }
    changStgGrpId(message: string) {
        this.stgGrpIdSource.next(message)
    }
    changAmpurName(message: string) {
        this.ampurNameSource.next(message)
    }
    changAmpurId(message: string) {
        this.ampurIdSource.next(message)
    }
    changkpiId(message: string) {
        this.kpiIdSource.next(message)
    }

    readConfig() {
        this.config = [];
        this.configService.readConfig()
            .then((rows: any) => {

                if (rows.ok) {
                    //console.log(rows);
                    this.config = rows.rows;
                    console.log(this.config);
                } else {
                    console.log('errr');
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error:197');
            })
    }


}
