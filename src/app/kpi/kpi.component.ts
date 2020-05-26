import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StgService } from '../common-services/stg.service';
import { StggroupService } from '../common-services/stggroup.service';
import { Globals } from '../common-services/global.service';
import { AlertService } from '../alert.service';

@Component({
    selector: 'app-kpi',
    templateUrl: './kpi.component.html',
    styleUrls: ['./kpi.component.scss']
})
export class KpiComponent implements OnInit {
    loading = false;
    stg_id: any;
    stg_grp_id: any;
    stgId: any;
    stgGrpId: any;
    kpi: any = [];
    getStggroup: any = [];
    getStg: any = [];
    stg_group_name: any;
    stg_name: any;
    stg_group_Two: any;
    stg_group_Three: any;
    stg_group_Four: any;
    stg_group_Five: any;
    stg_group_Six: any;
    amphurList: any = [];
    ampurModal: boolean = false;
    prov_id: any;

    stgMessage: string;
    stgGrpMessage: string;
    stgList: any = [];
    stgGrpList: any = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private stgService: StgService,
        private stgGroupService: StggroupService,
        private globals: Globals,
        private alertService: AlertService

    ) {

        this.route.params.subscribe((params) => {
            this.stg_id = params['stg_id'];
            this.stg_grp_id = params['stg_grp_id'];
            this.globals.glob_kpi = [];
            this.globals.glob_stg_id = this.stg_id;
            this.globals.glob_stg_grp_id = this.stg_grp_id;

            // ส่งค่า ชื่อเมนู  กลุมเมนู กลับไปแสดงที่ หน้า layout.html  ในกรณีที่มีการ  เปลี่ยน ตัวชี้วัด
            this.sendStgId(this.stg_id);
            this.sendStgGrpId(this.stg_grp_id);
            this.ShowStgGrpNameOne(this.stg_grp_id)
            this.ShowStgName(this.stg_id);
            // console.log(this.stg_name);
            //console.log(this.stg_id);
        });

    }

    ngOnInit() {
        this.ShowStgGroup();
        this.ShowStg();
        // this.SetGlobAmpherList();
        this.prov_id = sessionStorage.getItem('prov_code');
        console.log(this.prov_id);

    }

    sendStgName(stgMessage) {
        this.globals.changeStgName(stgMessage);
    }
    sendStgGrpName(stgGrpMessage) {
        this.globals.changeStgGrpName(stgGrpMessage);
    }
    sendStgId(massage) {
        this.globals.changStgId(massage);
    }
    sendStgGrpId(massage) {
        this.globals.changStgGrpId(massage);
    }




    ShowStgGroup() {
        this.getStggroup = [];
        this.stgGroupService.getStgGroup()
            .then((rows: any) => {
                if (rows.ok) {
                    this.getStggroup = rows.rows;
                    // console.log(rows.rows);

                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error');
            })
    }

    ShowStg() {
        this.getStg = [];
        this.stgService.getStg()
            .then((rows: any) => {
                if (rows.ok) {
                    this.getStg = rows.rows;
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error');
            })
    }
    ShowStgName(stgid) {
        console.log(stgid);
        this.stgService.getNameStg(stgid)
            .then((rows: any) => {
                if (rows.rows.length > 0) {

                    if (rows.ok) {
                        // console.log(rows.rows);
                        this.stgList = rows.rows;
                        /*let stgNameFilter = this.stgList.filter(function (data) {
                            return data.stg_id === stgid;
                        });*/
                        // let stgName = stgNameFilter[0].stg_name;
                        // console.log(this.stgList[0].stg_name);
                        this.sendStgName(this.stgList[0].stg_name);


                    } else {
                        console.log(JSON.stringify(rows.error));
                    }

                } else {
                    console.log("ไม่มีข้อมูล")
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error');
            })


    }
    ShowStgGrpNameOne(stgGrpid) {
        // console.log(stgGrpid);
        this.stgGrpList = [];
        this.stgService.getNameStgGrp(stgGrpid)
            .then((rows: any) => {
                if (rows.ok) {
                    // console.log(rows.rows);
                    this.stgGrpList = rows.rows;
                    /*let stgGrpNameFilter = this.stgGrpList.filter(function (data) {
                        return data.stg_group_id === stgGrpid;
                    });
                    let stgGrpName = stgGrpNameFilter[0].stg_group_name;
                     console.log(stgGrpNameFilter[0].stg_name);*/
                    // this.sendStgGrpName(stgGrpName);
                    this.sendStgGrpName(this.stgGrpList[0].stg_group_name);


                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error');
            })
    }
    getAmpherList() {
        let prov_id = sessionStorage.getItem('prov_code');
        this.amphurList = [];
        this.stgService.getAmphurList(prov_id)
            .then((rows: any) => {
                if (rows.ok) {
                    this.amphurList = rows.rows;
                    this.ampurModal = true;
                    // console.log("รายการอำเภอ" + this.amphurList);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error');
            })
    }
}
