import { Component, OnInit, Inject } from '@angular/core';
import { AdmstrategyService } from '../admin-services/admstrategy.service';
import { StggroupService } from '../../common-services/stggroup.service';
import { StgService } from '../../common-services/stg.service';
import { AlertService } from '../../alert.service'
import { LookupService } from '../admin-services/lookup.service';

// import service

@Component({
    selector: 'app-adminstrategy',
    templateUrl: './adminstrategy.component.html',
    styleUrls: ['./adminstrategy.component.scss']
})
export class AdminstrategyComponent implements OnInit {
    allstg: any = [];
    alluser: any = [];
    getStggroup: any = [];
    getStg: any = [];
    getStgOne: any = [];
    getStgTwo: any = [];
    getStgThree: any = [];
    getStgFour: any = [];
    getStgFive: any = [];
    getStgSix: any = [];
    stg_group_One: any;
    stg_group_Two: any;
    stg_group_Three: any;
    stg_group_Four: any;
    stg_group_Five: any;
    stg_group_Six: any;

    adminstg_id: any;
    adminstg_group_id: any;
    adminstg_name: any;
    adminstg_detail: any;
    adminstg_own: any;
    adminstg_status: any;

    alllookupstatus: any = [];

    isupdate: boolean = false;

    open: Boolean = false;
    constructor(
        private adminstrategy: AdmstrategyService,
        private stgService: StgService,
        private stgGroupService: StggroupService,
        private alertService: AlertService,
        private lookupService: LookupService

    ) { }

    ngOnInit() {
        this.ShowStgGroup();
        this.showAllstg();
        this.showUser();
        this.showLookup(); // เรียกการใช้งาน
    }


    showAllstg() {
        this.allstg = [];
        this.adminstrategy.getAlladmstrategy()
            .then((results: any) => {
                if (results.ok) {
                    this.allstg = results.rows;
                    console.log(this.allstg);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }


    // แสดงข้อมูล Lookup status
    showLookup() {
        this.alllookupstatus = [];
        this.lookupService.getAlllookupstatus()
            .then((rows: any) => {
                if (rows.ok) {
                    this.alllookupstatus = rows.rows;
                    console.log(this.alllookupstatus);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    // ----------------

    // แสดงข้อมูล ผู้รับผิดชอบ
    showUser() {
        this.alluser = [];
        this.adminstrategy.getAlluser()
            .then((rows: any) => {
                if (rows.ok) {
                    this.alluser = rows.rows;
                    console.log(this.alluser);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    ShowStgGroup() {
        this.getStggroup = [];
        this.stgGroupService.getStgGroup()
            .then((rows: any) => {
                if (rows.ok) {
                    this.getStggroup = rows.rows;
                    this.stg_group_One = this.getStggroup[0].stg_group_name;
                    this.stg_group_Two = this.getStggroup[1].stg_group_name;
                    this.stg_group_Four = this.getStggroup[2].stg_group_name;
                    this.stg_group_Three = this.getStggroup[3].stg_group_name;
                    this.stg_group_Five = this.getStggroup[4].stg_group_name;
                    this.stg_group_Six = this.getStggroup[5].stg_group_name;
                    // console.log(this.getStggroup);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error")
            })
    }

    ShowStg(stg_group_id) { /*เพื่อดึงข้อมูล stg ตามที่เลือก */
        this.allstg = [];
        this.adminstrategy.getStg(stg_group_id)
            .then((rows: any) => {
                if (rows.ok) {
                    this.allstg = rows.rows;
                    console.log(this.allstg);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error")
            })
    }

    addData() {
        if (
            this.adminstg_id &&
            this.adminstg_group_id &&
            this.adminstg_name &&
            this.adminstg_detail &&
            this.adminstg_own &&
            this.adminstg_status
        ) {
            this.adminstrategy.save(
                this.adminstg_id,
                this.adminstg_group_id,
                this.adminstg_name,
                this.adminstg_detail,
                this.adminstg_own,
                this.adminstg_status
            )
                .then((results: any) => {
                    if (results.ok) {
                        console.log("เพิ่มข้อมูลสำเร็จ");
                        this.showAllstg();
                        this.adminstg_id = null;
                        this.adminstg_group_id = null;
                        this.adminstg_name = null;
                        this.adminstg_detail = null;
                        this.adminstg_own = null;
                        this.open = false;
                    } else {
                        console.log("เพิ่มข้อมูลไม่สำเร็จ");
                    }
                })
                .catch(() => {
                    console.log("Server Error");
                })
        } else {
            console.log("กรุณากรอกข้อมูลให้ครบ");
        }
    }

    updateData() {
        if (
            this.adminstg_id &&
            this.adminstg_group_id &&
            this.adminstg_name &&
            this.adminstg_detail &&
            this.adminstg_own &&
            this.adminstg_status
        ) {
            this.adminstrategy.edit(
                this.adminstg_id,
                this.adminstg_group_id,
                this.adminstg_name,
                this.adminstg_detail,
                this.adminstg_own,
                this.adminstg_status
            )
                .then((results: any) => {
                    if (results.ok) {
                        console.log("เพิ่มข้อมูลสำเร็จ");
                        this.showAllstg();
                        this.adminstg_id = null;
                        this.adminstg_group_id = null;
                        this.adminstg_name = null;
                        this.adminstg_detail = null;
                        this.adminstg_own = null;
                        this.open = false;
                    } else {
                        console.log("เพิ่มข้อมูลไม่สำเร็จ");
                    }
                })
                .catch(() => {
                    console.log("Server Error");
                })
        } else {
            console.log("กรุณากรอกข้อมูลให้ครบ");
        }
    }

    // showEdit(r) {
    //     this.isupdate = true;
    //     console.log(r);
    //     this.adminstg_id = r.stg_id;
    //     this.adminstg_group_id = r.stg_grp_id;
    //     this.adminstg_name = r.stg_name;
    //     this.adminstg_detail = r.stg_detail;
    //     this.adminstg_own = r.stg_own;
    //     this.adminstg_status = r.stg_status;
    //     this.open = true;
    // }
    showEdit(r) {
        this.isupdate = true;
        console.log(r);
        this.adminstg_id = r.stg_id;
        this.adminstg_group_id = r.stg_grp_id;
        this.adminstg_name = r.stg_name;
        this.adminstg_detail = r.stg_detail;
        this.adminstg_own = r.stg_own;
        this.adminstg_status = r.stg_status;
        this.open = true;
    }

    deleteData(r) {
        console.log(r);
        this.adminstg_id = r.stg_id;
        this.alertService.delete('คุณต้องการลบข้อมูลนี้ ใช่หรือไม่?');
        if (this.adminstg_id) {
            this.adminstrategy.remove(this.adminstg_id)
                .then((results: any) => {
                    if (results.ok) {
                        this.showAllstg();
                    } else {
                        console.log(results.error)
                        this.alertService.error("ไม่สามารถลบข้อมูลได้")
                    }
                })
                .catch(() => {
                    console.log("Server Error");
                })
        }
    }

    saveData() {
        if (this.isupdate) {
            this.updateData();
        } else {
            this.addData();
        }
    }



}

