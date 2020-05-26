import { Component, OnInit, ChangeDetectorRef, ViewChild, Inject, NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { ClarityModule } from "clarity-angular";
import { AdminkpiService } from '../admin-services/adminkpi.service';

import { AdmstrategyService } from '../admin-services/admstrategy.service';
import { LookupService } from '../admin-services/lookup.service';
import { AlertService } from '../../alert.service'

import { UploadingService } from '../../common-services/uploading.service';
import * as moment from 'moment';

@Component({
    selector: 'app-adminkpi',
    templateUrl: './adminkpi.component.html',
    styleUrls: ['./adminkpi.component.scss']
})
export class AdminkpiComponent implements OnInit {
    @ViewChild('modalUpload') public modalUpload: any;
    allAdminKpi: any = [];
    adminkpi_id: any;
    adminkpi_stg_id: any;
    adminkpi_name: any;
    adminkpi_detail: any;
    adminkpi_type: any;
    adminkpi_scale: any;
    adminkpi_cal: any;
    adminkpi_tar: any;
    adminkpi_type_data: any;
    adminkpi_own: any;
    adminkpi_status: any;
    adminkpi_file: any;
    adminkpi_update: any;
    adminkpi_file2: any;
    adminkpi_source: any;
    adminkpi_order: any;
    adminkpi_indiv: any;
    adminkpi_report: any;
    adminowner: any;

    isupdate: boolean = false;
    open: Boolean = false;

    allstg: any = [];
    alllookuptype: any = [];
    alllookupstatus: any = [];
    alllookupusers: any = [];
    alllookupsource: any = [];
    alllookuptypedata: any = [];
    alllookupcal: any = [];

    filetoUpload1: Array<File> = [];
    filetoUpload2: Array<File> = [];
    filePath: string;
    fileName: any;
    files: Array<any> = [];
    isUpoading: boolean = false;

    constructor(
        private adminkpiService: AdminkpiService,
        private stgService: AdmstrategyService,
        private alertService: AlertService,
        private lookupService: LookupService,
        @Inject('KPI_PREFIX') public docPrefix: string,
        private uploadingService: UploadingService
    ) { }

    ngOnInit() {
        this.showAllAdminKpi();
        this.ShowStg();
        this.showLookup();
        this.showLookupstatus();
        this.showLookupusers();
        this.showLookupsource();
        this.showLookuptypedata();
        this.showLookupcal();
    }

    showAllAdminKpi() {
        this.allAdminKpi = [];
        this.adminkpiService.getAllAdminKpi()
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminKpi = results.rows;
                    console.log(this.allAdminKpi);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }

    // แสดงข้อมูล ส่วน กลุ่ม/หมวด ตัวชี้วัด

    ShowStg() {
        this.allstg = [];
        this.stgService.getAlladmstrategy()
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

    // ----------------

    // แสดงข้อมูล Lookuptype
    showLookup() {
        this.alllookuptype = [];
        this.lookupService.getAlllookuptype()
            .then((rows: any) => {
                if (rows.ok) {
                    this.alllookuptype = rows.rows;
                    console.log(this.alllookuptype);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error")
            })
    }

    // ----------------

    // แสดงข้อมูล Lookupstatus
    showLookupstatus() {
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
                console.log("Server Error")
            })
    }

    // ----------------

    // แสดงข้อมูล Lookup source
    showLookupsource() {
        this.alllookupsource = [];
        this.lookupService.getAlllookupsource()
            .then((rows: any) => {
                if (rows.ok) {
                    this.alllookupsource = rows.rows;
                    console.log(this.alllookupsource);
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

    // แสดงข้อมูล Lookup typedata
    showLookuptypedata() {
        this.alllookuptypedata = [];
        this.lookupService.getAlllookuptypedata()
            .then((rows: any) => {
                if (rows.ok) {
                    this.alllookuptypedata = rows.rows;
                    console.log(this.alllookuptypedata);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    // ----------------

    // แสดงข้อมูล Lookup cal
    showLookupcal() {
        this.alllookupcal = [];
        this.lookupService.getAlllookupcal()
            .then((rows: any) => {
                if (rows.ok) {
                    this.alllookupcal = rows.rows;
                    console.log(this.alllookupcal);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    // ----------------


    async addData() {
        if (
            this.adminkpi_id &&
            this.adminkpi_stg_id &&
            this.adminkpi_name &&
            this.adminkpi_detail &&
            this.adminkpi_type &&
            this.adminkpi_scale &&
            this.adminkpi_cal &&
            this.adminkpi_tar &&
            this.adminkpi_type_data &&
            this.adminkpi_own &&
            this.adminkpi_status &&
            // this.adminkpi_file &&
            this.adminkpi_update &&
            // this.adminkpi_file2 &&
            this.adminkpi_source &&
            // this.adminkpi_order &&
            // this.adminkpi_indiv &&
            // this.adminkpi_report &&
            this.adminowner
        ) {
            let rssave: any = await this.adminkpiService.save(
                this.adminkpi_id,
                this.adminkpi_stg_id,
                this.adminkpi_name,
                this.adminkpi_detail,
                this.adminkpi_type,
                this.adminkpi_scale,
                this.adminkpi_cal,
                this.adminkpi_tar,
                this.adminkpi_type_data,
                this.adminkpi_own,
                this.adminkpi_status,
                this.adminkpi_file,
                this.adminkpi_update,
                this.adminkpi_file2,
                this.adminkpi_source,
                this.adminkpi_order,
                this.adminkpi_indiv,
                this.adminkpi_report,
                this.adminowner
            );
            let up1 = await this.uploadingService.makeFileRequest(this.adminkpi_id, this.filetoUpload1);
            let up2 = await this.uploadingService.makeFileRequest(this.adminkpi_id, this.filetoUpload2);
            if (rssave.ok) {
                this.showAllAdminKpi();
                this.adminkpi_id = null;
                this.adminkpi_stg_id = null;
                this.adminkpi_name = null;
                this.adminkpi_detail = null;
                this.adminkpi_type = null;
                this.adminkpi_scale = null;
                this.adminkpi_cal = null;
                this.adminkpi_tar = null;
                this.adminkpi_type_data = null;
                this.adminkpi_own = null;
                this.adminkpi_status = null;
                this.adminkpi_file = null;
                this.adminkpi_update = null;
                this.adminkpi_file2 = null;
                this.adminkpi_source = null;
                this.adminkpi_order = null;
                this.adminkpi_indiv = null;
                this.adminkpi_report = null;
                this.adminowner = null;
                this.open = false;
            }
        } else {
            console.log("กรุณากรอกข้อมูลให้ครบ");
            this.alertService.error("กรุณากรอกข้อมูลให้ครบ")
        }
    }

    async updateData() {
        if (
            this.adminkpi_id &&
            this.adminkpi_stg_id &&
            this.adminkpi_name &&
            this.adminkpi_detail &&
            this.adminkpi_type &&
            this.adminkpi_scale &&
            // this.adminkpi_cal &&
            this.adminkpi_tar &&
            this.adminkpi_type_data &&
            // this.adminkpi_own &&
            this.adminkpi_status &&
            // this.adminkpi_file &&
            this.adminkpi_update &&
            // this.adminkpi_file2 &&
            // this.adminkpi_source &&
            // this.adminkpi_order &&
            // this.adminkpi_indiv &&
            // this.adminkpi_report &&
            this.adminowner
        ) {
            let rsupdate: any = await this.adminkpiService.edit(
                this.adminkpi_id,
                this.adminkpi_stg_id,
                this.adminkpi_name,
                this.adminkpi_detail,
                this.adminkpi_type,
                this.adminkpi_scale,
                this.adminkpi_cal,
                this.adminkpi_tar,
                this.adminkpi_type_data,
                this.adminkpi_own,
                this.adminkpi_status,
                this.adminkpi_file,
                this.adminkpi_update,
                this.adminkpi_file2,
                this.adminkpi_source,
                this.adminkpi_order,
                this.adminkpi_indiv,
                this.adminkpi_report,
                this.adminowner
            );
            let up1 = await this.uploadingService.makeFileRequest(this.adminkpi_id, this.filetoUpload1);
            let up2 = await this.uploadingService.makeFileRequest(this.adminkpi_id, this.filetoUpload2);
            if (rsupdate.ok) {
                this.showAllAdminKpi();
                this.adminkpi_id = null;
                this.adminkpi_stg_id = null;
                this.adminkpi_name = null;
                this.adminkpi_detail = null;
                this.adminkpi_type = null;
                this.adminkpi_scale = null;
                this.adminkpi_cal = null;
                this.adminkpi_tar = null;
                this.adminkpi_type_data = null;
                this.adminkpi_own = null;
                this.adminkpi_status = null;
                this.adminkpi_file = null;
                this.adminkpi_update = null;
                this.adminkpi_file2 = null;
                this.adminkpi_source = null;
                this.adminkpi_order = null;
                this.adminkpi_indiv = null;
                this.adminkpi_report = null;
                this.adminowner = null;
                this.open = false;
            } else {
                console.log("แก้ไขข้ออมูลไม่สำเร็จ");
                this.alertService.error("แก้ไขข้ออมูลไม่สำเร็จ")
            }
        } else {
            console.log("กรุณากรอกข้อมูลให้ครบ");
            this.alertService.error("กรุณากรอกข้อมูลให้ครบ")

        }
    }

    showEdit(r) {
        this.isupdate = true;
        console.log(r);
        this.adminkpi_id = r.kpi_id;
        this.adminkpi_stg_id = r.kpi_stg_id;
        this.adminkpi_name = r.kpi_name;
        this.adminkpi_detail = r.kpi_detail;
        this.adminkpi_type = r.kpi_type;
        this.adminkpi_scale = r.kpi_scale;
        this.adminkpi_cal = r.kpi_cal;
        this.adminkpi_tar = r.kpi_tar;
        this.adminkpi_type_data = r.kpi_type_data;
        this.adminkpi_own = r.kpi_own;
        this.adminkpi_status = r.kpi_status;
        this.adminkpi_file = r.kpi_file;
        // this.adminkpi_update = r.kpi_update;
        if (r.kpi_update === null) {
            this.adminkpi_update = r.kpi_update;
        } else {
            this.adminkpi_update = moment(r.kpi_update).format('YYYY-MM-DD');
        }
        this.adminkpi_file2 = r.kpi_file2;
        this.adminkpi_source = r.kpi_source;
        this.adminkpi_order = r.kpi_order;
        this.adminkpi_indiv = r.kpi_indiv;
        this.adminkpi_report = r.kpi_report;
        this.adminowner = r.owner;
        this.open = true;
        console.log(this.adminkpi_type);

    }

    deleteData(r) {
        console.log(r);
        this.adminkpi_id = r.adminkpi_id;
        this.alertService.delete('คุณต้องการลบข้อมูลนี้ ใช่หรือไม่?');
        if (this.adminkpi_id) {
            this.adminkpiService.remove(this.adminkpi_id)
                .then((results: any) => {
                    if (results.ok) {
                        this.allAdminKpi();
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


    fileChangeEvent1(fileInput: any) {
        this.filetoUpload1 = [];
        this.filetoUpload1 = <Array<File>>fileInput.target.files;
    }

    fileChangeEvent2(fileInput: any) {
        this.filetoUpload2 = [];
        this.filetoUpload2 = <Array<File>>fileInput.target.files;
    }


    // upload file
    uploadFile() {
        this.modalUpload.openModal(this.adminkpi_id, this.docPrefix);
    }



}
