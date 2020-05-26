import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { ClarityModule } from "clarity-angular";
import { AdminmainkpiService } from '../admin-services/adminmainkpi.service';
import { AlertService } from '../../alert.service';
import { LookupService } from '../admin-services/lookup.service';

@Component({
    selector: 'app-adminmainkpi',
    templateUrl: './adminmainkpi.component.html',
    styleUrls: ['./adminmainkpi.component.scss']
})
export class AdminmainkpiComponent implements OnInit {
    allAdminMainKpi: any = [];
    stg_id: any;
    stg_group_id: any;
    stg_group_name: any;
    stg_group_detail: any;
    sth_group_own: any;
    stg_group_status: any;

    isupdate: boolean = false;
    open: Boolean = false;


    alllookupstatus: any = [];
    alllookupusers: any = [];

    constructor(
        private adminmainkpiService: AdminmainkpiService,
        private alertService: AlertService,
        private lookupService: LookupService
    ) { }

    ngOnInit() {
        this.showAllAdminMainKpi();
        this.showLookup();
        this.showLookupusers();
    }
    // แสดงกลุ่มหลักตัวชี้วัด
    showAllAdminMainKpi() {
        this.allAdminMainKpi = [];
        this.adminmainkpiService.getAllAdminMainKpi()
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminMainKpi = results.rows;
                    console.log(this.allAdminMainKpi);
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

    // แสดงข้อมูล Lookup users
    showLookupusers() {
        this.alllookupusers = [];
        this.lookupService.getAlllookupusers()
            .then((rows: any) => {
                if (rows.ok) {
                    this.alllookupusers = rows.rows;
                    console.log(this.alllookupusers);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    // ----------------

    addData() {
        if (
            this.stg_group_id &&
            this.stg_group_name &&
            this.stg_group_detail &&
            this.sth_group_own &&
            this.stg_group_status
        ) {
            this.adminmainkpiService.save(
                this.stg_group_id,
                this.stg_group_name,
                this.stg_group_detail,
                this.sth_group_own,
                this.stg_group_status,
            )
                .then((results: any) => {
                    if (results.ok) {
                        console.log("เพิ่มข้อมูลสำเร็จ");
                        this.allAdminMainKpi();
                        this.stg_group_id = null;
                        this.stg_group_name = null;
                        this.stg_group_detail = null;
                        this.sth_group_own = null;
                        this.stg_group_status = null;
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
            this.stg_group_id &&
            this.stg_group_name &&
            this.stg_group_detail &&
            this.sth_group_own &&
            this.stg_group_status
        ) {
            this.adminmainkpiService.edit(
                this.stg_group_id,
                this.stg_group_name,
                this.stg_group_detail,
                this.sth_group_own,
                this.stg_group_status,
            )
                .then((results: any) => {
                    if (results.ok) {
                        console.log("แก้ไขข้อมูลสำเร็จ");
                        this.allAdminMainKpi();
                        this.stg_group_id = null;
                        this.stg_group_name = null;
                        this.stg_group_detail = null;
                        this.sth_group_own = null;
                        this.stg_group_status = null;
                        this.open = false;
                    } else {
                        console.log("แก้ไขข้ออมูลไม่สำเร็จ");
                    }
                })
                .catch(() => {
                    console.log("Server Error");
                })
        } else {
            console.log("กรุณากรอกข้อมูลให้ครบ");
        }
    }

    showEdit(r) {
        this.isupdate = true;
        console.log(r);
        this.stg_group_id = r.stg_group_id;
        this.stg_group_name = r.stg_group_name;
        this.stg_group_detail = r.stg_group_detail;
        this.sth_group_own = r.sth_group_own;
        this.stg_group_status = r.stg_group_status;
        this.open = true;
    }

    deleteData(r) {
        console.log(r);
        this.stg_group_id = r.stg_group_id;
        this.alertService.delete('คุณต้องการลบข้อมูลนี้ ใช่หรือไม่?');
        if (this.stg_group_id) {
            this.adminmainkpiService.remove(this.stg_group_id)
                .then((results: any) => {
                    if (results.ok) {
                        this.allAdminMainKpi();
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

