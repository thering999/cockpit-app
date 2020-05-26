import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { ClarityModule } from "clarity-angular";
import { AdminoutputService } from '../admin-services/adminoutput.service';
import { AlertService } from '../../alert.service'
import { log } from 'core-js/library/web/timers';

@Component({
    selector: 'app-adminoutput',
    templateUrl: './adminoutput.component.html',
    styleUrls: ['./adminoutput.component.scss']
})
export class AdminoutputComponent implements OnInit {
    allAdminOutput: any = [];
    allAdminOutput2: any = [];
    allAdminOutput3: any = [];
    allAdminOutput4: any = [];
    allAdminOutput5: any = [];
    allAdminOutput6: any = [];
    allAdminOutput7: any = [];
    allAdminOutput8: any = [];
    allAdminOutput9: any = [];
    allAdminOutput10: any = [];
    allAdminOutput401: any = [];
    allAdminOutput402: any = [];
    allAdminOutput403: any = [];
    allAdminOutput404: any = [];
    allAdminOutput405: any = [];
    allAdminOutput406: any = [];
    allAdminOutput407: any = [];
    allAdminOutput408: any = [];
    allAdminOutput409: any = [];
    allAdminOutput410: any = [];
    allAdminOutput411: any = [];
    allAdminOutput412: any = [];
    allAdminOutput413: any = [];
    allAdminOutput414: any = [];
    allAdminOutput415: any = [];
    allAdminOutput416: any = [];
    allAdminOutput417: any = [];
    allAdminOutput418: any = [];
    allAdminOutput419: any = [];
    allAdminOutput420: any = [];
    allAdminOutput421: any = [];
    allAdminOutput422: any = [];
    allAdminOutput501: any = [];
    allAdminOutput601: any = [];
    allAdminOutput602: any = [];
    adminoutput_id: any;
    adminoutput_stg_id: any;
    adminoutput_name: any;
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
    kpiamp: any;
    kpiprov: any;
    userLevel: any;

    db_level: any;
    dp_baseline: string;
    dp_prov: string;
    dp_kpi: string;
    dp_pop: string;
    dp_data: string;
    dp_rate: string;
    dp_pop1: string;
    dp_data1: string;
    dp_rate1: string;
    dp_pop2: string;
    dp_data2: string;
    dp_rate2: string;
    dp_pop3: string;
    dp_data3: string;
    dp_rate3: string;
    dp_pop4: string;
    dp_data4: string;
    dp_rate4: string;

    da_amphurname: string;
    da_baseline: string;
    da_prov: string;
    da_kpi: string;
    da_pop: string;
    da_data: string;
    da_rate: string;
    da_pop1: string;
    da_data1: string;
    da_rate1: string;
    da_pop2: string;
    da_data2: string;
    da_rate2: string;
    da_pop3: string;
    da_data3: string;
    da_rate3: string;
    da_pop4: string;
    da_data4: string;
    da_rate4: string;

    isupdate: boolean = false;

    open: Boolean = false;
    constructor(
        private alertService: AlertService,
        private adminoutputService: AdminoutputService
    ) { }

    ngOnInit() {
        this.userLevel = sessionStorage.username;
        console.log(this.userLevel);

        this.showAllAdminOutput();
        this.showAllAdminOutput2();
        this.showAllAdminOutput3();
        this.showAllAdminOutput4();
        this.showAllAdminOutput5();
        this.showAllAdminOutput6();
        this.showAllAdminOutput7();
        this.showAllAdminOutput8();
        this.showAllAdminOutput9();
        this.showAllAdminOutput10();
        this.showAllAdminOutput401();
        this.showAllAdminOutput402();
        this.showAllAdminOutput403();
        this.showAllAdminOutput404();
        this.showAllAdminOutput405();
        this.showAllAdminOutput406();
        this.showAllAdminOutput407();
        this.showAllAdminOutput408();
        this.showAllAdminOutput409();
        this.showAllAdminOutput410();
        this.showAllAdminOutput411();
        this.showAllAdminOutput412();
        this.showAllAdminOutput413();
        this.showAllAdminOutput414();
        this.showAllAdminOutput415();
        this.showAllAdminOutput416();
        this.showAllAdminOutput417();
        this.showAllAdminOutput418();
        this.showAllAdminOutput419();
        this.showAllAdminOutput420();
        this.showAllAdminOutput421();
        this.showAllAdminOutput422();
        this.showAllAdminOutput501();
        this.showAllAdminOutput601();
        this.showAllAdminOutput602();
    }

    showAllAdminOutput() {
        this.allAdminOutput = [];
        this.adminoutputService.getAllAdminOutput(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput = results.rows;
                    // console.log(this.allAdminOutput);
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
        this.adminoutputService.getAllAdminOutput2(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput2 = results.rows;
                    // console.log(this.allAdminOutput2);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput3() {
        this.allAdminOutput3 = [];
        this.adminoutputService.getAllAdminOutput3(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput3 = results.rows;
                    // console.log(this.allAdminOutput3);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput4() {
        this.allAdminOutput4 = [];
        this.adminoutputService.getAllAdminOutput4(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput4 = results.rows;
                    // console.log(this.allAdminOutput4);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput5() {
        this.allAdminOutput5 = [];
        this.adminoutputService.getAllAdminOutput5(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput5 = results.rows;
                    // console.log(this.allAdminOutput5);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput6() {
        this.allAdminOutput6 = [];
        this.adminoutputService.getAllAdminOutput6(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput6 = results.rows;
                    // console.log(this.allAdminOutput6);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput7() {
        this.allAdminOutput7 = [];
        this.adminoutputService.getAllAdminOutput7(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput7 = results.rows;
                    // console.log(this.allAdminOutput7);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput8() {
        this.allAdminOutput8 = [];
        this.adminoutputService.getAllAdminOutput8(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput8 = results.rows;
                    // console.log(this.allAdminOutput8);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput9() {
        this.allAdminOutput9 = [];
        this.adminoutputService.getAllAdminOutput9(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput9 = results.rows;
                    // console.log(this.allAdminOutput9);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput10() {
        this.allAdminOutput10 = [];
        this.adminoutputService.getAllAdminOutput10(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput10 = results.rows;
                    // console.log(this.allAdminOutput10);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput401() {
        this.allAdminOutput401 = [];
        this.adminoutputService.getAllAdminOutput401(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput401 = results.rows;
                    // console.log(this.allAdminOutput401);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput402() {
        this.allAdminOutput402 = [];
        this.adminoutputService.getAllAdminOutput402(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput402 = results.rows;
                    // console.log(this.allAdminOutput402);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput403() {
        this.allAdminOutput403 = [];
        this.adminoutputService.getAllAdminOutput403(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput403 = results.rows;
                    // console.log(this.allAdminOutput403);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput404() {
        this.allAdminOutput404 = [];
        this.adminoutputService.getAllAdminOutput404(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput404 = results.rows;
                    // console.log(this.allAdminOutput404);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput405() {
        this.allAdminOutput405 = [];
        this.adminoutputService.getAllAdminOutput405(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput405 = results.rows;
                    // console.log(this.allAdminOutput405);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput406() {
        this.allAdminOutput406 = [];
        this.adminoutputService.getAllAdminOutput406(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput406 = results.rows;
                    // console.log(this.allAdminOutput406);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput407() {
        this.allAdminOutput407 = [];
        this.adminoutputService.getAllAdminOutput407(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput407 = results.rows;
                    // console.log(this.allAdminOutput407);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput408() {
        this.allAdminOutput408 = [];
        this.adminoutputService.getAllAdminOutput408(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput408 = results.rows;
                    // console.log(this.allAdminOutput408);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput409() {
        this.allAdminOutput409 = [];
        this.adminoutputService.getAllAdminOutput409(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput409 = results.rows;
                    // console.log(this.allAdminOutput409);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput410() {
        this.allAdminOutput410 = [];
        this.adminoutputService.getAllAdminOutput410(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput410 = results.rows;
                    // console.log(this.allAdminOutput410);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput411() {
        this.allAdminOutput411 = [];
        this.adminoutputService.getAllAdminOutput411(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput411 = results.rows;
                    // console.log(this.allAdminOutput411);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput412() {
        this.allAdminOutput412 = [];
        this.adminoutputService.getAllAdminOutput412(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput412 = results.rows;
                    // console.log(this.allAdminOutput412);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput413() {
        this.allAdminOutput413 = [];
        this.adminoutputService.getAllAdminOutput413(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput413 = results.rows;
                    // console.log(this.allAdminOutput413);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput414() {
        this.allAdminOutput414 = [];
        this.adminoutputService.getAllAdminOutput414(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput414 = results.rows;
                    // console.log(this.allAdminOutput414);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput415() {
        this.allAdminOutput415 = [];
        this.adminoutputService.getAllAdminOutput415(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput415 = results.rows;
                    // console.log(this.allAdminOutput415);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput416() {
        this.allAdminOutput416 = [];
        this.adminoutputService.getAllAdminOutput416(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput416 = results.rows;
                    // console.log(this.allAdminOutput416);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput417() {
        this.allAdminOutput417 = [];
        this.adminoutputService.getAllAdminOutput417(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput417 = results.rows;
                    // console.log(this.allAdminOutput417);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput418() {
        this.allAdminOutput418 = [];
        this.adminoutputService.getAllAdminOutput418(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput418 = results.rows;
                    // console.log(this.allAdminOutput418);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput419() {
        this.allAdminOutput419 = [];
        this.adminoutputService.getAllAdminOutput419(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput419 = results.rows;
                    // console.log(this.allAdminOutput419);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput420() {
        this.allAdminOutput420 = [];
        this.adminoutputService.getAllAdminOutput420(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput420 = results.rows;
                    // console.log(this.allAdminOutput420);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput421() {
        this.allAdminOutput421 = [];
        this.adminoutputService.getAllAdminOutput421(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput421 = results.rows;
                    // console.log(this.allAdminOutput421);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput422() {
        this.allAdminOutput422 = [];
        this.adminoutputService.getAllAdminOutput422(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput422 = results.rows;
                    // console.log(this.allAdminOutput422);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput501() {
        this.allAdminOutput501 = [];
        this.adminoutputService.getAllAdminOutput501(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput501 = results.rows;
                    // console.log(this.allAdminOutput501);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput601() {
        this.allAdminOutput601 = [];
        this.adminoutputService.getAllAdminOutput601(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput601 = results.rows;
                    // console.log(this.allAdminOutput601);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }
    showAllAdminOutput602() {
        this.allAdminOutput602 = [];
        this.adminoutputService.getAllAdminOutput602(this.userLevel)
            .then((results: any) => {
                if (results.ok) {
                    this.allAdminOutput602 = results.rows;
                    // console.log(this.allAdminOutput602);
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }


    showEdit(l) {
        this.isupdate = true;
        console.log(l);
        this.adminoutput_id = l.kpi_id;
        this.adminoutput_stg_id = l.kpi_stg_id;
        this.adminoutput_name = l.kpi_name;
        this.adminoutput_detail = l.kpi_detail;
        this.adminoutput_type = l.kpi_type;
        this.adminoutput_scale = l.kpi_scale;
        this.adminoutput_cal = l.kpi_cal;
        this.adminoutput_tar = l.kpi_tar;
        this.adminoutput_type_data = l.kpi_type_data;
        this.adminoutput_own = l.kpi_own;
        this.adminoutput_status = l.kpi_status;
        this.adminoutput_file = l.kpi_file;
        this.adminoutput_update = l.kpi_update;
        this.adminoutput_file2 = l.kpi_file2;
        this.adminoutput_source = l.kpi_source;
        this.adminoutput_order = l.kpi_order;
        this.adminoutput_indiv = l.kpi_indiv;
        this.adminoutput_report = l.kpi_report;
        this.adminoutputowner = l.owner;
        // console.log(this.adminoutput_id);
        this.open = true;
        this.kpiamp = [];
        this.adminoutputService.getKpiAmp(this.adminoutput_id)
            .then((results: any) => {
                if (results.ok) {
                    this.kpiamp = results.rows;
                    console.log(this.kpiamp);
                    // this.da_amphurname = this.kpiamp[0].da_amphurname;
                    // this.da_baseline = this.kpiamp[0].da_baseline;
                    // this.da_prov = this.kpiamp[0].da_prov;
                    // this.da_kpi = this.kpiamp[0].da_kpi;
                    // this.da_pop = this.kpiamp[0].da_pop;
                    // this.da_data = this.kpiamp[0].da_data;
                    // this.da_rate = this.kpiamp[0].da_rate;
                    // this.da_pop1 = this.kpiamp[0].da_pop1;
                    // this.da_data1 = this.kpiamp[0].da_data1;
                    // this.da_rate1 = this.kpiamp[0].da_rate1;
                    // this.da_pop2 = this.kpiamp[0].da_pop2;
                    // this.da_data2 = this.kpiamp[0].da_data2;
                    // this.da_rate2 = this.kpiamp[0].da_rate2;
                    // this.da_pop3 = this.kpiamp[0].da_pop3;
                    // this.da_data3 = this.kpiamp[0].da_data3;
                    // this.da_rate3 = this.kpiamp[0].da_rate3;
                    // this.da_pop4 = this.kpiamp[0].da_pop4;
                    // this.da_data4 = this.kpiamp[0].da_data4;
                    // this.da_rate4 = this.kpiamp[0].da_rate4;
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
        this.kpiprov = [];
        this.adminoutputService.getKpiProv(this.adminoutput_id, this.adminoutput_stg_id)
            .then((results: any) => {
                if (results.ok) {
                    this.kpiprov = results.rows;
                    // console.log(this.kpiprov);
                    this.db_level = "ผลงานระดับจังหวัด";
                    this.dp_baseline = this.kpiprov[0].dp_baseline;
                    this.dp_prov = this.kpiprov[0].dp_prov;
                    this.dp_kpi = this.kpiprov[0].dp_kpi;
                    this.dp_pop = this.kpiprov[0].dp_pop;
                    this.dp_data = this.kpiprov[0].dp_data;
                    this.dp_rate = this.kpiprov[0].dp_rate;
                    this.dp_pop1 = this.kpiprov[0].dp_pop1;
                    this.dp_data1 = this.kpiprov[0].dp_data1;
                    this.dp_rate1 = this.kpiprov[0].dp_rate1;
                    this.dp_pop2 = this.kpiprov[0].dp_pop2;
                    this.dp_data2 = this.kpiprov[0].dp_data2;
                    this.dp_rate2 = this.kpiprov[0].dp_rate2;
                    this.dp_pop3 = this.kpiprov[0].dp_pop3;
                    this.dp_data3 = this.kpiprov[0].dp_data3;
                    this.dp_rate3 = this.kpiprov[0].dp_rate3;
                    this.dp_pop4 = this.kpiprov[0].dp_pop4;
                    this.dp_data4 = this.kpiprov[0].dp_data4;
                    this.dp_rate4 = this.kpiprov[0].dp_rate4;
                } else {
                    console.log(JSON.stringify(results.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }

    // saveProv() {
    //     if (
    //         this.kpiprov
    //     ) {
    //         this.adminoutputService.edit(
    //             this.adminoutput_id,
    //             this.adminoutput_stg_id,
    //         )
    //             .then((results: any) => {
    //                 if (results.ok) {
    //                     console.log("แก้ไขข้อมูลสำเร็จ");
    //                     this.kpiprov();
    //                     this.open = false;
    //                 } else {
    //                     console.log("แก้ไขข้ออมูลไม่สำเร็จ");
    //                     this.open = false;
    //                 }
    //             })
    //             .catch(() => {
    //                 console.log("Server Error");
    //             })
    //     } else {
    //         console.log("กรุณากรอกข้อมูลให้ครบ");
    //     }
    // }

    // saveAmp() {
    //     if (
    //         this.kpiamp
    //         // this.stg_group_id &&
    //         // this.stg_group_name &&
    //         // this.stg_group_detail &&
    //         // this.sth_group_own &&
    //         // this.stg_group_status
    //     ) {
    //         this.adminoutputService.edit(
    //             this.adminoutput_id,
    //             this.adminoutput_stg_id,
    //         )
    //             // this.adminmainkpiService.edit(
    //             //     this.stg_group_id,
    //             //     this.stg_group_name,
    //             //     this.stg_group_detail,
    //             //     this.sth_group_own,
    //             //     this.stg_group_status,
    //             // )
    //             .then((results: any) => {
    //                 if (results.ok) {
    //                     console.log("แก้ไขข้อมูลสำเร็จ");
    //                     this.kpiamp();
    //                     // this.stg_group_id = null;
    //                     // this.stg_group_name = null;
    //                     // this.stg_group_detail = null;
    //                     // this.sth_group_own = null;
    //                     // this.stg_group_status = null;
    //                     this.open = false;
    //                 } else {
    //                     console.log("แก้ไขข้ออมูลไม่สำเร็จ");
    //                 }
    //             })
    //             .catch(() => {
    //                 console.log("Server Error");
    //             })
    //     } else {
    //         console.log("กรุณากรอกข้อมูลให้ครบ");
    //     }
    // }

    // saveData() {
    //     if (this.isupdate) {
    //         this.saveProv();
    //     } else {
    //         this.saveAmp();
    //     }
    // }

    async addData() {
        if (
            this.dp_baseline &&
            this.dp_pop &&
            this.dp_data &&
            this.dp_rate &&
            this.dp_pop1 &&
            this.dp_data1 &&
            this.dp_rate1 &&
            this.dp_pop2 &&
            this.dp_data2 &&
            this.dp_rate2 &&
            this.dp_pop3 &&
            this.dp_data3 &&
            this.dp_rate3 &&
            this.dp_pop4 &&
            this.dp_data4 &&
            this.dp_rate4
            // this.dp_pop1 &&
            // this.dp_data1 &&
            // this.dp_rate1 &&
            // this.dp_pop2 &&
            // this.dp_data2 &&
            // this.dp_rate2 &&
            // this.dp_pop3 &&
            // this.dp_data3 &&
            // this.dp_rate3 &&
            // this.dp_pop4 &&
            // this.dp_data4 &&
            // this.dp_rate4
        ) {
            let rssave: any = await this.adminoutputService.save(
                this.dp_prov,
                this.dp_kpi,
                this.dp_pop,
                this.dp_data,
                this.dp_rate,
                this.dp_pop1,
                this.dp_data1,
                this.dp_rate1,
                this.dp_pop2,
                this.dp_data2,
                this.dp_rate2,
                this.dp_pop3,
                this.dp_data3,
                this.dp_rate3,
                this.dp_pop4,
                this.dp_data4,
                this.dp_rate4
            );
            if (rssave.ok) {
                this.dp_prov = null;
                this.dp_kpi = null;
                this.dp_pop = null;
                this.dp_data = null;
                this.dp_rate = null;
                this.dp_pop1 = null;
                this.dp_data1 = null;
                this.dp_rate1 = null;
                this.dp_pop2 = null;
                this.dp_data2 = null;
                this.dp_rate2 = null;
                this.dp_pop3 = null;
                this.dp_data3 = null;
                this.dp_rate3 = null;
                this.dp_pop4 = null;
                this.dp_data4 = null;
                this.dp_rate4 = null;
                this.open = false;
            }
        } else {
            console.log("กรุณากรอกข้อมูลให้ครบ");
            this.alertService.error("กรุณากรอกข้อมูลให้ครบ")
        }
    }

    async updateData() {
        console.log(this.dp_baseline);
        console.log(this.dp_pop);
        console.log(this.dp_data);
        console.log(this.dp_rate);
        console.log(this.dp_pop1);
        console.log(this.dp_data1);
        console.log(this.dp_rate1);
        console.log(this.dp_pop2);
        console.log(this.dp_data2);
        console.log(this.dp_rate2);
        console.log(this.dp_pop3);
        console.log(this.dp_data3);
        console.log(this.dp_rate3);
        console.log(this.dp_pop4);
        console.log(this.dp_data4);
        console.log(this.dp_rate4);
        if (
            this.kpiprov
        ) {
            let rsupdate: any = await this.adminoutputService.edit(
                this.dp_prov,
                this.dp_kpi,
                this.dp_baseline,
                this.dp_pop,
                this.dp_data,
                this.dp_rate,
                this.dp_pop1,
                this.dp_data1,
                this.dp_rate1,
                this.dp_pop2,
                this.dp_data2,
                this.dp_rate2,
                this.dp_pop3,
                this.dp_data3,
                this.dp_rate3,
                this.dp_pop4,
                this.dp_data4,
                this.dp_rate4
            );
            console.log(rsupdate);

            if (rsupdate.ok) {
                // this.db_level = null;
                // this.dp_baseline = null;
                // this.dp_pop = null;
                // this.dp_data = null;
                // this.dp_rate = null;
                // this.dp_pop1 = null;
                // this.dp_data1 = null;
                // this.dp_rate1 = null;
                // this.dp_pop2 = null;
                // this.dp_data2 = null;
                // this.dp_rate2 = null;
                // this.dp_pop3 = null;
                // this.dp_data3 = null;
                // this.dp_rate3 = null;
                // this.dp_pop4 = null;
                // this.dp_data4 = null;
                // this.dp_rate4 = null;
                this.alertService.success("บันทึกข้อมูลสำเร็จแล้ว")
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

    saveData() {
        if (this.isupdate) {
            this.updateData();
        } else {
            this.addData();
        }
    }
    saveDataamp() {
        if (this.isupdate) {
            this.updateAmpData();
        } else {
            this.addDataamp();
        }
    }

    async updateAmpData() {
        console.log(this.da_baseline);
        console.log(this.da_pop);
        console.log(this.da_data);
        console.log(this.da_rate);
        console.log(this.da_pop1);
        console.log(this.da_data1);
        console.log(this.da_rate1);
        console.log(this.da_pop2);
        console.log(this.da_data2);
        console.log(this.da_rate2);
        console.log(this.da_pop3);
        console.log(this.da_data3);
        console.log(this.da_rate3);
        console.log(this.da_pop4);
        console.log(this.da_data4);
        console.log(this.da_rate4);
        if (
            this.kpiamp
        ) {
            let rsupdate: any = await this.adminoutputService.editamp(
                this.kpiamp
            );
            console.log(rsupdate);

            if (rsupdate.ok) {
                // this.db_level = null;
                // this.dp_baseline = null;
                // this.dp_pop = null;
                // this.dp_data = null;
                // this.dp_rate = null;
                // this.dp_pop1 = null;
                // this.dp_data1 = null;
                // this.dp_rate1 = null;
                // this.dp_pop2 = null;
                // this.dp_data2 = null;
                // this.dp_rate2 = null;
                // this.dp_pop3 = null;
                // this.dp_data3 = null;
                // this.dp_rate3 = null;
                // this.dp_pop4 = null;
                // this.dp_data4 = null;
                // this.dp_rate4 = null;
                this.alertService.success("บันทึกข้อมูลสำเร็จแล้ว")
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
    
    async addDataamp() {
        if (
            this.da_baseline 
            // this.da_pop &&
            // this.da_data &&
            // this.da_rate &&
            // this.da_pop1 &&
            // this.da_data1 &&
            // this.da_rate1 &&
            // this.da_pop2 &&
            // this.da_data2 &&
            // this.da_rate2 &&
            // this.da_pop3 &&
            // this.da_data3 &&
            // this.da_rate3 &&
            // this.da_pop4 &&
            // this.da_data4 &&
            // this.da_rate4
           
        ) {
            let rssave: any = await this.adminoutputService.saveamp(
                
            );
            if (rssave.ok) {
                this.da_prov = null;
                this.da_kpi = null;
                this.da_pop = null;
                this.da_data = null;
                this.da_rate = null;
                this.da_pop1 = null;
                this.da_data1 = null;
                this.da_rate1 = null;
                this.da_pop2 = null;
                this.da_data2 = null;
                this.da_rate2 = null;
                this.da_pop3 = null;
                this.da_data3 = null;
                this.da_rate3 = null;
                this.da_pop4 = null;
                this.da_data4 = null;
                this.da_rate4 = null;
                this.open = false;
            }
        } else {
            console.log("กรุณากรอกข้อมูลให้ครบ");
            this.alertService.error("กรุณากรอกข้อมูลให้ครบ")
        }
    }

    // Update KpiProv
    updateDpBaseline(kp, inputdpbaseline, idx) {
        console.log(kp);
        console.log(inputdpbaseline.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_baseline = inputdpbaseline.value;
        this.dp_baseline = this.kpiprov[idx].dp_baseline;
    }
    updateDpPop(kp, inputdppop, idx) {
        console.log(kp);
        console.log(inputdppop.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_pop = inputdppop.value;
        this.dp_pop = this.kpiprov[idx].dp_pop;
    }
    updateDpData(kp, inputdpdata, idx) {
        console.log(kp);
        console.log(inputdpdata.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_data = inputdpdata.value;
        this.dp_data = this.kpiprov[idx].dp_data;
    }
    updateDpRate(kp, inputdprate, idx) {
        console.log(kp);
        console.log(inputdprate.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_rate = inputdprate.value;
        this.dp_rate = this.kpiprov[idx].dp_rate;
    }
    updateDpPop1(kp, inputpop1, idx) {
        console.log(kp);
        console.log(inputpop1.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_pop1 = inputpop1.value;
        this.dp_pop1 = this.kpiprov[idx].dp_pop1;
    }
    updateDpData1(kp, inputdata1, idx) {
        console.log(kp);
        console.log(inputdata1.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_data1 = inputdata1.value;
        this.dp_data1 = this.kpiprov[idx].dp_data1;
    }
    updateDpRate1(kp, inputrate1, idx) {
        console.log(kp);
        console.log(inputrate1.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_rate1 = inputrate1.value;
        this.dp_rate1 = this.kpiprov[idx].dp_rate1;
    }
    updateDpPop2(kp, inputpop2, idx) {
        console.log(kp);
        console.log(inputpop2.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_pop2 = inputpop2.value;
        this.dp_pop2 = this.kpiprov[idx].dp_pop2;
    }
    updateDpData2(kp, inputdata2, idx) {
        console.log(kp);
        console.log(inputdata2.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_data2 = inputdata2.value;
        this.dp_data2 = this.kpiprov[idx].dp_data2;
    }
    updateDpRate2(kp, inputrate2, idx) {
        console.log(kp);
        console.log(inputrate2.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_rate2 = inputrate2.value;
        this.dp_rate2 = this.kpiprov[idx].dp_rate2;
    }
    updateDpPop3(kp, inputpop3, idx) {
        console.log(kp);
        console.log(inputpop3.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_pop3 = inputpop3.value;
        this.dp_pop3 = this.kpiprov[idx].dp_pop3;
    }
    updateDpData3(kp, inputdata3, idx) {
        console.log(kp);
        console.log(inputdata3.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_data3 = inputdata3.value;
        this.dp_data3 = this.kpiprov[idx].dp_data3;
    }
    updateDpRate3(kp, inputrate3, idx) {
        console.log(kp);
        console.log(inputrate3.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_rate3 = inputrate3.value;
        this.dp_rate3 = this.kpiprov[idx].dp_rate3;
    }
    updateDpPop4(kp, inputpop4, idx) {
        console.log(kp);
        console.log(inputpop4.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_pop4 = inputpop4.value;
        this.dp_pop4 = this.kpiprov[idx].dp_pop4;
    }
    updateDpData4(kp, inputdata4, idx) {
        console.log(kp);
        console.log(inputdata4.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_data4 = inputdata4.value;
        this.dp_data4 = this.kpiprov[idx].dp_data4;
    }
    updateDpRate4(kp, inputrate4, idx) {
        console.log(kp);
        console.log(inputrate4.value);
        // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
        this.kpiprov[idx].dp_rate4 = inputrate4.value;
        this.dp_rate4 = this.kpiprov[idx].dp_rate4;
    }
    // updateDpKpidate(kp, inputdpkpiupdate, idx) {
    //     console.log(kp);
    //     console.log(inputdpkpiupdate.value);
    //     // update object kpiprov โดยส่งค่า index(idx) ไปด้วย
    //     this.kpiprov[idx].dp_rate = inputdpkpiupdate.value;
    // }

    // Update KpiAmp
    updateBaselineamp(ka, inputbaselineamp, idx) {
        console.log(ka);
        console.log(inputbaselineamp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_baseline = inputbaselineamp.value;
        // this.kpiamp=this.kpiamp[idx].da_baseline;
    }
    updatePopamp(ka, inputpopamp, idx) {
        console.log(ka);
        console.log(inputpopamp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_pop = inputpopamp.value;
    }
    updateDataamp(ka, inputdataamp, idx) {
        console.log(ka);
        console.log(inputdataamp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_data = inputdataamp.value;
    }
    updateRateamp(ka, inputrateamp, idx) {
        console.log(ka);
        console.log(inputrateamp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_rate = inputrateamp.value;
    }
    updatePop1amp(ka, inputpop1amp, idx) {
        console.log(ka);
        console.log(inputpop1amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_pop = inputpop1amp.value;
    }
    updateData1amp(ka, inputdata1amp, idx) {
        console.log(ka);
        console.log(inputdata1amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_data = inputdata1amp.value;
    }
    updateRate1amp(ka, inputrate1amp, idx) {
        console.log(ka);
        console.log(inputrate1amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_rate = inputrate1amp.value;
    }
    updatePop2amp(ka, inputpop2amp, idx) {
        console.log(ka);
        console.log(inputpop2amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_pop = inputpop2amp.value;
    }
    updateData2amp(ka, inputdata2amp, idx) {
        console.log(ka);
        console.log(inputdata2amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_data = inputdata2amp.value;
    }
    updateRate2amp(ka, inputrate2amp, idx) {
        console.log(ka);
        console.log(inputrate2amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_rate = inputrate2amp.value;
    }
    updatePop3amp(ka, inputpop3amp, idx) {
        console.log(ka);
        console.log(inputpop3amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_pop = inputpop3amp.value;
    }
    updateData3amp(ka, inputdata3amp, idx) {
        console.log(ka);
        console.log(inputdata3amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_data = inputdata3amp.value;
    }
    updateRate3amp(ka, inputrate3amp, idx) {
        console.log(ka);
        console.log(inputrate3amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_rate = inputrate3amp.value;
    }
    updatePop4amp(ka, inputpop4amp, idx) {
        console.log(ka);
        console.log(inputpop4amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_pop = inputpop4amp.value;
    }
    updateData4amp(ka, inputdata4amp, idx) {
        console.log(ka);
        console.log(inputdata4amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_data = inputdata4amp.value;
    }
    updateRate4amp(ka, inputrate4amp, idx) {
        console.log(ka);
        console.log(inputrate4amp.value);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.kpiamp[idx].da_rate = inputrate4amp.value;
    }
    // updateKpidate(k, inputkpiupdate, idx) {
    //     console.log(k);
    //     console.log(inputkpiupdate.value);
    //     // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
    //     this.kpiamp[idx].da_rate = inputkpiupdate.value;
    // }

}
