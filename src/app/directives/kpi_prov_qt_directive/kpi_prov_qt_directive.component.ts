import { Component, OnInit, OnDestroy, AfterViewInit, Renderer, ViewChild, Input } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { KpiQtService } from '../../common-services/kpi-qt.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AlertService } from '../../alert.service';

@Component({
    selector: 'kpi_prov_qt_directive',
    templateUrl: './kpi_prov_qt_directive.component.html',
    styleUrls: ['./kpi_prov_qt_directive.component.scss']
})
export class KpiProvQtDirectiveComponent implements OnInit {
    @Input() kpiId: string;
    @Input() kpiAarray: any;
    @ViewChild(DataTableDirective)
    datatableElement: DataTableDirective;
    kpi_qt_prov: any;
    kpi_qt_amp: any;
    // kpi_Id: any = "417009";


    dtTrigger: Subject<any> = new Subject();
    dtOptions: DataTables.Settings = {};//user with Observable
    //dtOptions: Promise<DataTables.Settings>;// use with promise
    //dtOptions2: DataTables.Settings = {};
    //dtTrigger2: Subject<any> = new Subject();

    constructor(
        private http: Http,
        private kpiQtService: KpiQtService,
        private renderer: Renderer,
        private alertService: AlertService

    ) { }

    ngOnInit() {
        console.log(this.kpiAarray);
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
            language: {
                "search": "<span class='label label-info'>ค้นหา</span>:",
                "paginate": {
                    first: "หน้าแรก",
                    previous: "ผ่านมา",
                    next: "ถัดไป",
                    last: "สุดท้าย"
                },
                "info": "แสดงหน้าที่ _PAGE_ จาก _PAGES_ หน้าจากทั้งหมด _MAX_   รายการ",
                "lengthMenu": "เลือกแสดง _MENU_ รายการต่อหน้า",
                "infoEmpty": "No records available",
            },
            rowCallback: (row: Node, data: any[] | Object, index: number) => {
                const self = this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                $('td', row).unbind('click');
                $('td', row).bind('click', () => {
                    self.someClickHandler(data);
                });
                return row;
            }
        };

        this.getKpiQtDataProvPromis();
        this.getKpiQtDataAmpPromis();
    }
    ngOnDestroy(): void {
        // We remove the last function in the global ext search array so we do not add the fn each time the component is drawn
        // /!\ This is not the ideal solution as other components may add other search function in this array, so be careful when
        // handling this global variable
        $.fn['dataTable'].ext.search.pop();
    }
    someClickHandler(info: any): void {
        console.log(info);
        //this.referNoRow = info[15];
    };
    reloadKpiQt() {
        // this.min = 0;
        // this.max = 0;
        $.fn['dataTable'].ext.afnFiltering.length = 0;
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
            //     //Destroy the table first
            dtInstance.destroy();
        });

        this.getKpiQtDataProvPromis();
    };

    /*เรียกข้อมูล ลง datatable  แบบ promise*/
    getKpiQtDataProvPromis() {
        // $.fn['dataTable'].ext.afnFiltering.length = 0;
        // this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //     dtInstance.destroy();
        // });
        this.kpi_qt_prov = [];
        // this.dtOptions = this.http.get('data/dtOptions.json')
        this.kpiQtService.getKpiProvQtDataPromis(this.kpiId)
            .then((rows: any) => {
                if (rows.ok) {
                    this.kpi_qt_prov = rows.rows;
                    //this.dtTrigger.next();
                    console.log(this.kpi_qt_prov);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");

                this.alertService.error('Server Error');
            })
    }
    getKpiQtDataAmpPromis() {
        // $.fn['dataTable'].ext.afnFiltering.length = 0;
        // this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //     dtInstance.destroy();
        // });
        this.kpi_qt_amp = [];
        // this.dtOptions = this.http.get('data/dtOptions.json')
        this.kpiQtService.getKpiAmpQtDataPromis(this.kpiId)
            .then((rows: any) => {
                if (rows.ok) {
                    this.kpi_qt_amp = rows.rows;
                    this.dtTrigger.next();
                    console.log(this.kpi_qt_amp);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");

                this.alertService.error('Server Error');
            })
    }



}
