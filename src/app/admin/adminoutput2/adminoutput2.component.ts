import { Component, OnInit, Inject } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { ClarityModule } from "clarity-angular";
import { Adminoutput2Service } from '../admin-services/adminoutput2.service';

@Component({
    selector: 'app-adminoutput2',
    templateUrl: './adminoutput2.component.html',
    styleUrls: ['./adminoutput2.component.scss']
})
export class Adminoutput2Component implements OnInit {
    allAdminOutput: any = [];
    allAdminOutput2: any = [];
    adminoutput_id: any;
    adminoutput_stg_id: any;
    aadminoutput_name: any;
    adminoutput_detail: any;
    adminoutput_type: any;
    adminoutput_scale: any;
    adminoutput_cal: any;
    adminoutput_tar: any;
    adminoutput_type_data: any;
    adminoutput_own: any;
    adminoutput_status: any;
    adminoutput_file: any;
    adminoutput_update: any;
    adminoutput_file2: any;
    adminoutput_source: any;
    adminoutput_order: any;
    adminoutput_indiv: any;
    adminoutput_report: any;
    adminoutputowner: any;

    isupdate: boolean = false;

    open: Boolean = false;

    constructor(
        private adminoutput2Service: Adminoutput2Service
    ) { }

    ngOnInit() {
        this.showAllAdminOutput();
        this.showAllAdminOutput2();
    }

    showAllAdminOutput() {
        this.allAdminOutput = [];
        this.adminoutput2Service.getAllAdminOutput()
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput = results.rows;
                    console.log(this.allAdminOutput);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }

    showAllAdminOutput2() {
        this.allAdminOutput2 = [];
        this.adminoutput2Service.getAllAdminOutput2()
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput2 = results.rows;
                    console.log(this.allAdminOutput2);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }

}
