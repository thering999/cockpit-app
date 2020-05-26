import { Component, OnInit, OnDestroy, AfterViewInit, Renderer, ViewChild, Input } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { KpiQtService } from '../../common-services/kpi-qt.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AlertService } from '../../alert.service';

@Component({
    selector: 'kpi_ampur_qt_directive',
    templateUrl: './kpi_ampur_qt_directive.component.html',
    styleUrls: ['./kpi_ampur_qt_directive.component.scss']
})
export class KpiAmpurQtDirectiveComponent implements OnInit {
    @Input() kpiId: string;
    @Input() kpiAarray: any;
    @ViewChild(DataTableDirective)
    datatableElement: DataTableDirective;
    kpi_qt_hos: any;
    kpi_qt_ampOne: any;


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
        //console.log(this.kpiAarray);
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

        this.getKpiQtDataAmpOnePromis();
        this.getKpiQtDataOffPromis();
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

        this.getKpiQtDataAmpOnePromis();
    };

    /*เรียกข้อมูล ลง datatable  แบบ promise*/

    getKpiQtDataAmpOnePromis() {
        // $.fn['dataTable'].ext.afnFiltering.length = 0;
        // this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //     dtInstance.destroy();
        // });
        let ampurId = this.kpiAarray[0].da_amp;
        this.kpi_qt_ampOne = [];
        // this.dtOptions = this.http.get('data/dtOptions.json')
        this.kpiQtService.getKpiAmpOneQtDataPromis(this.kpiId, ampurId)
            .then((rows: any) => {
                if (rows.ok) {
                    this.kpi_qt_ampOne = rows.rows;
                    //this.dtTrigger.next();
                    //console.log(this.kpi_qt_ampOne);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {

                this.alertService.error('Server Error');
            })
    }
    getKpiQtDataOffPromis() {
        // $.fn['dataTable'].ext.afnFiltering.length = 0;
        // this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //     dtInstance.destroy();
        // });
        let ampurId = (this.kpiAarray[0].da_amp).substring(2);
        //console.log(ampurId);
        this.kpi_qt_hos = [];
        // this.dtOptions = this.http.get('data/dtOptions.json')
        this.kpiQtService.getKpiOffQtDataPromis(this.kpiId, ampurId)
            .then((rows: any) => {
                if (rows.ok) {
                    this.kpi_qt_hos = rows.rows;
                    this.dtTrigger.next();
                    //console.log(this.kpi_qt_hos);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {

                this.alertService.error('Server Error');
            })
    }




}
