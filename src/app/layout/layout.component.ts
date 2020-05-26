import { Component, OnInit, OnDestroy, AfterViewInit, Renderer, ViewChild } from '@angular/core';

import { ActivatedRoute, Router, Params, RoutesRecognized } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { KpiComponent } from '../kpi/kpi.component';
import { StgService } from '../common-services/stg.service';
import { StggroupService } from '../common-services/stggroup.service';
import { ConfigService } from '../common-services/config.service';
import { Globals } from '../common-services/global.service';
import { AlertService } from '../alert.service';
import * as jQuery from "jquery";
// import { PdfViewerModule } from 'ng2-pdf-viewer';



@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    config: any = [];
    userFname: string;
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
    // รับค่ามาจาก kpi_component  ผ่าน service global
    stg_id: any;
    stg_grp_id: any;
    stg_group_name: any;
    stg_name: any;
    ampurname: any = '';

    prov_code: any;
    prov_name: any;
    year: any;
    //////////////////
    ampurId: any;

    amphurList: any = [];
    ampurModal: boolean = false;

    button1Loading: boolean = false;
    button2Loading: boolean = false;
    button3Loading: boolean = false;
    button4Loading: boolean = false;
    button5Loading: boolean = false;
    button6Loading: boolean = false;

    button1Class: any;
    button2Class: any;
    button3Class: any;
    button4Class: any;
    button5Class: any;
    button6Class: any;


    basic: boolean = false;
    @ViewChild(DataTableDirective)
    datatableElement: DataTableDirective;
    dtTrigger: Subject<any> = new Subject();
    dtOptions: DataTables.Settings = {};//user with Observable
    search: any = "t";
    searchItems: any = [];
    searchSendParam: any = [];
    KpiIdRow: any = "";
    menuItems: any = [
        'flag', 'flask', 'tasks', 'bolt', 'key', 'tags'
    ]


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private stgService: StgService,
        private stgGroupService: StggroupService,
        private configService: ConfigService,
        private globals: Globals,
        private alertService: AlertService,

    ) {

    }

    ngOnInit() {
        //ดึงค่าพื้นฐานต่าง ๆ
        this.readConfig();
        //แสดงรายการเมนูหลัก
        this.ShowStgGroup();
        // แสดงรายการเมนูยอย
        this.ShowStg();
        // ตรวจสอบการ Login

        this.userFname = sessionStorage.getItem('userFname');
        this.prov_code = sessionStorage.getItem('prov_code');

        // ในกรณี ที่มีการ refresh page จะมีการเก็บชื่อ เมนู ปัจจุบันไว้ที่  global  ก่อน
        // แล้วจะ รับค่า กลับมาแสดงใหม่  หน้า kpi_component จะส่งค่าเข้ามา
        this.globals.stgIdMessage.subscribe(stgIdMessage => this.stg_id = stgIdMessage);
        //console.log('stg' + this.stg_id);
        this.globals.stgGrpIdMessage.subscribe(stgGrpIdMessage => this.stg_grp_id = stgGrpIdMessage);
        this.globals.stgMessage.subscribe(stgMessage => this.stg_name = stgMessage);
        this.globals.stgGrpMessage.subscribe(stgGrpMessage => this.stg_group_name = stgGrpMessage);
        this.globals.ampurIdMessage.subscribe(ampurIdMessage => this.ampurId = ampurIdMessage);
        this.globals.ampurNameMessage.subscribe(ampurNameMessage => this.ampurname = ampurNameMessage);
        // console.log('+++' + this.stg_group_name);
        // console.log("amperdfdfkd" + this.ampurId);
        // if (this.ampurId != '') {
        //     console.log('router');
        //     //this.router.navigateByUrl("/kpiampur/" + this.stg_id + "/" + this.stg_grp_id + "/" + this.ampurId);
        //     this.router.navigate(['./kpiampur',this.stg_id,this.stg_grp_id,this.ampurId]);
        // }

        // this.ShowNameStg();
        // this.ShowNameStgGrp();

        // กำหนด ตัวแปร Class button
        this.button1Class = "btn btn-link";
        this.button2Class = "btn btn-link";
        this.button3Class = "btn btn-link";
        this.button4Class = "btn btn-link";
        this.button5Class = "btn btn-link";
        this.button6Class = "btn btn-link";
        this.logLogin();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
            language: {
                "search": "<a href='...' role='tooltip' aria-haspopup='true' class='tooltip tooltip-xs tooltip-bottom-right'><span class='label label-info'><clr-icon shape='search'></clr-icon>ค้นหา</span><span class='tooltip-content'>ค้นหาจากส่วนใดส่วนหนึ่งของประโยค์</span></a>:",
                "paginate": {
                    first: "หน้าแรก",
                    previous: "ผ่านมา",
                    next: "ถัดไป",
                    last: "สุดท้าย"
                },
                "info": "แสดงหน้าที่ _PAGE_ จาก _PAGES_ หน้าจากทั้งหมด _MAX_   รายการ",
                "lengthMenu": "เลือกแสดง _MENU_ รายการต่อหน้า",
                "infoEmpty": "No records available",
                loadingRecords: "Please wait - loading..."
            },
            rowCallback: (row: Node, data: any[] | Object, index: number) => {
                const self = this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                $('td', row).unbind('click');
                $('td', row).bind('click', () => {
                    self.someClickHandler(data);
                    //console.log("clickrow");
                    this.showSearchKpi();
                });
                return row;
            }
        };



    }//onnginit

    ngOnDestroy(): void {
        // We remove the last function in the global ext search array so we do not add the fn each time the component is drawn
        // /!\ This is not the ideal solution as other components may add other search function in this array, so be careful when
        // handling this global variable
        $.fn['dataTable'].ext.search.pop();
    }
    logLogin() {
        // let sessionStorage: any;
        if (sessionStorage.getItem('userLevel') != null) {
            // console.log(sessionStorage.userLevel);
            // console.log(sessionStorage.userFname);
            if (sessionStorage.getItem('userLevel') === "4" || sessionStorage.getItem('userLevel') === "3") {
                if (sessionStorage.getItem('userLevel') === "4") {
                    this.router.navigate(['admin/adminkpi']); // ส่ง Routes ไป admin/home
                } else {
                    this.router.navigate(['admin/adminoutput']); // ส่ง Routes ไป admin/home
                }

            } else {
                this.router.navigate(['cockpit/kpi']); // ส่ง Routes ไป client/home
            }

        } else {
            this.router.navigate(['cockpit/kpi']); // ส่ง Routes ไป client/home
        }

    }

    readConfig() {
        this.config = [];
        this.configService.readConfig()
            .then((rows: any) => {
                if (rows.ok) {
                    //console.log(rows);
                    this.config = rows.rows;
                    sessionStorage.setItem('prov_code', this.config.prov_code);
                    sessionStorage.setItem('prov_name', this.config.prov_name);
                    sessionStorage.setItem('year', this.config.year);

                    this.prov_code = sessionStorage.getItem('prov_code');
                    this.prov_name = sessionStorage.getItem('prov_name');
                    this.year = sessionStorage.getItem('year');

                    // console.log(this.prov_code);

                } else {
                    console.log('errr');
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error:197');
            })
    }

    doLogout() {
        sessionStorage.removeItem('userFname');
        sessionStorage.removeItem('hospcode');
        sessionStorage.removeItem('userLevel');
        location.reload();
    }


    backtoProv() {
        this.ampurname = '';
    }
    // คลิกกลุ่มเมนู แล้วส่งค่าชื่อเมนูไปแสดงใน  label  ()
    setNameStg(e) {
        let text = e.target.innerText;
        this.stg_name = text;
        //console.log(this.stg_name);
        this.globals.glob_search_kpi_id = '';

    }
    // คลิกกลุ่มเมนู แล้วส่งค่าชื่อเมนูไปแสดงใน  label  (ไม่ได้ใช้แล้ว)
    setNameStgGrp(e) {
        let text = e.target.innerText;
        this.stg_group_name = text;
        // console.log(text);

    }

    ShowNameStg(stg_id) {
        this.stg_name = '';
        this.stgService.getNameStg(stg_id)
            .then((rows: any) => {
                if (rows.rows.length) {
                    if (rows.ok) {
                        this.stg_name = rows.rows[0].stg_name;
                        // console.log(this.stg_name);
                    } else {
                        // console.log(JSON.stringify(rows.error));
                    }
                } else {
                    console.log("ไม่พบข้อมูลที่ค้นหา");
                }
            })
            .catch(() => {
                console.log("Server Error");

                // this.alertService.error('Server Error:244');
            })
    }

    ShowNameStgGrp(stg_grp_id) {
        this.stg_group_name = '';
        this.stgGroupService.getNameStgGrp(stg_grp_id)
            .then((rows: any) => {
                if (rows.rows.length) {
                    if (rows.ok) {
                        this.stg_group_name = rows.rows[0].stg_group_name;
                        // console.log(this.stg_group_name);
                    } else {
                        console.log(JSON.stringify(rows.error));
                    }
                } else {
                    console.log("ไม่พบข้อมูลที่ค้นหา");
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error:265');
            })
    }
    //แสดงรายการเมนูหลักทั้งหมด
    ShowStgGroup() {
        this.getStggroup = [];
        this.stgGroupService.getStgGroup()
            .then((rows: any) => {
                if (rows.rows.length) {
                    if (rows.ok) {
                        this.getStggroup = rows.rows;

                    } else {
                        console.log(JSON.stringify(rows.error));
                    }
                } else {
                    console.log("ไม่พบข้อมูลที่ค้นหา");
                }
            })
            .catch(() => {
                console.log("Server Error:285")
            })
    }
    //แสดงรายการเมนูย่อย
    ShowStg() {
        this.getStg = [];
        this.stgService.getStg()
            .then((rows: any) => {
                if (rows.rows.length) {
                    if (rows.ok) {
                        this.getStg = rows.rows;
                        // console.log(this.getStg);
                    } else {
                        console.log(JSON.stringify(rows.error));
                    }
                } else {
                    console.log("ไม่พบข้อมูลที่ค้นหา");
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error:Ln306');
            })
    }


    SetGlobAmpherList() {
        let prov_id = sessionStorage.getItem('prov_code');
        // console.log(prov_id);

        this.globals.glob_ampurList = [];
        this.stgService.getAmphurList(prov_id)
            .then((rows: any) => {
                if (rows.rows.length) {
                    if (rows.ok) {
                        this.globals.glob_ampurList = rows.rows;
                        // console.log(this.amphurList);
                    } else {
                        console.log(JSON.stringify(rows.error));
                    }
                } else {
                    console.log("ไม่พบข้อมูลที่ค้นหา");
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error:Ln329');
            })
    }



    destroyKpi() {
        console.log('destroy');
        this.globals.glob_kpi = [];
    }
    getAmpherList() {

        // let prov_id = this.globals.glob_prov_id;
        let prov_id = sessionStorage.getItem('prov_code');
        this.amphurList = [];
        this.stgService.getAmphurList(prov_id)
            .then((rows: any) => {
                if (rows.rows.length) {
                    if (rows.ok) {
                        this.amphurList = rows.rows;
                        this.ampurModal = true;
                        // console.log("รายการอำเภอ" + this.amphurList);
                    } else {
                        console.log(JSON.stringify(rows.error));
                    }
                } else {
                    console.log("ไม่พบข้อมูลที่ค้นหา");
                }
            })
            .catch(() => {
                console.log("Server Error:Ln357")
            })
    }
    acceptAmpur(ampurId) {
        //console.log(ampurId);
        this.ampurId = ampurId;
        this.ampurModal = false;
        // console.log(ampurId);

    }
    backtoProvView() {
        this.ampurname = '';
        this.globals.changAmpurName(this.ampurname);
        this.globals.changAmpurId('');
    }

    button1() {
        // this.setNameStg($event);
        // เพิ่ม function กดเลือกเมนู ให้ระบุสี และ ที่อยู่
        this.button1Class = "btn btn-warning-outline";
        this.button2Class = "btn btn-link";
        this.button3Class = "btn btn-link";
        this.button4Class = "btn btn-link";
        this.button5Class = "btn btn-link";
        this.button6Class = "btn btn-link";

        this.button1Loading = true;
        this.button2Loading = false;
        this.button3Loading = false;
        this.button4Loading = false;
        this.button5Loading = false;
        this.button6Loading = false;
        this.search = "t";
    }
    button2() {
        // this.setNameStg($event);
        // เพิ่ม function กดเลือกเมนู ให้ระบุสี และ ที่อยู่
        this.button1Class = "btn btn-link";
        this.button2Class = "btn btn-warning-outline";
        this.button3Class = "btn btn-link";
        this.button4Class = "btn btn-link";
        this.button5Class = "btn btn-link";
        this.button6Class = "btn btn-link";

        this.button1Loading = false;
        this.button2Loading = true;
        this.button3Loading = false;
        this.button4Loading = false;
        this.button5Loading = false;
        this.button6Loading = false;
    }
    button3() {
        // this.setNameStg($event);
        // เพิ่ม function กดเลือกเมนู ให้ระบุสี และ ที่อยู่
        this.button1Class = "btn btn-link";
        this.button2Class = "btn btn-link";
        this.button3Class = "btn btn-warning-outline";
        this.button4Class = "btn btn-link";
        this.button5Class = "btn btn-link";
        this.button6Class = "btn btn-link";

        this.button1Loading = false;
        this.button2Loading = false;
        this.button3Loading = true;
        this.button4Loading = false;
        this.button5Loading = false;
        this.button6Loading = false;
    }
    button4() {
        // this.setNameStg($event);
        // เพิ่ม function กดเลือกเมนู ให้ระบุสี และ ที่อยู่
        this.button1Class = "btn btn-link";
        this.button2Class = "btn btn-link";
        this.button3Class = "btn btn-link";
        this.button4Class = "btn btn-warning-outline";
        this.button5Class = "btn btn-link";
        this.button6Class = "btn btn-link";

        this.button1Loading = false;
        this.button2Loading = false;
        this.button3Loading = false;
        this.button4Loading = true;
        this.button5Loading = false;
        this.button6Loading = false;
    }
    button5() {
        // this.setNameStg($event);
        // เพิ่ม function กดเลือกเมนู ให้ระบุสี และ ที่อยู่
        this.button1Class = "btn btn-link";
        this.button2Class = "btn btn-link";
        this.button3Class = "btn btn-link";
        this.button4Class = "btn btn-link";
        this.button5Class = "btn btn-warning-outline";
        this.button6Class = "btn btn-link";

        this.button1Loading = false;
        this.button2Loading = false;
        this.button3Loading = false;
        this.button4Loading = false;
        this.button5Loading = true;
        this.button6Loading = false;
    }
    button6() {
        // this.setNameStg($event);
        // เพิ่ม function กดเลือกเมนู ให้ระบุสี และ ที่อยู่
        this.button1Class = "btn btn-link";
        this.button2Class = "btn btn-link";
        this.button3Class = "btn btn-link";
        this.button4Class = "btn btn-link";
        this.button5Class = "btn btn-link";
        this.button6Class = "btn btn-warning-outline";

        this.button1Loading = false;
        this.button2Loading = false;
        this.button3Loading = false;
        this.button4Loading = false;
        this.button5Loading = false;
        this.button6Loading = true;
    }
    searchKpi() {
        this.search = "f";
        if (this.searchItems.length == 0) {
            this.searchShowItems();
        }
    }

    searchShowItems() {
        this.searchItems = [];
        this.stgGroupService.getKpiItems()
            .then((rows: any) => {
                if (rows.rows.length > 0) {
                    if (rows.ok) {
                        this.searchItems = rows.rows;
                        //console.log("SItems"+rows.rows[0]);
                        this.dtTrigger.next();
                        //console.log("รายการ" + this.searchItems[0]);
                    } else {
                        console.log(JSON.stringify(rows.error));
                    }
                } else {
                    console.log("ไม่พบข้อมูลที่ค้นหา");
                }
            })
            .catch(() => {
                console.log("Server Error:Ln499");
                //this.alertService.error('Server Error');
            })
    }
    searchCancel() {
        this.search = "t";

    }
    someClickHandler(info: any): void {
        //console.log(info);
        this.KpiIdRow = info[0];
        this.globals.glob_search_kpi_id = info[0];
        // console.log( this.globals.glob_search_kpi_id);
        this.stg_id = info[1];
        this.stg_grp_id = info[2];
        // this.router.navigate(['cockpit/kpi',info[1],info[2]]);
        this.router.navigate(['cockpit/kpi']);
        //this.router.navigate(['./kpi', info[1],info[2]], {relativeTo: this.route});
    };
    showSearchKpi() {
        this.searchSendParam = [];
        console.log('me:' + this.KpiIdRow);
        for (var i = 0; i < this.searchItems.length; i++) {
            if (this.searchItems[i].kpi_id === this.KpiIdRow) {
                this.searchSendParam.push(this.searchItems[i]);
            }
        }
        this.search = "t";
        //console.log(this.searchSendParam);

    }


}
