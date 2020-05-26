import { Component, OnInit, ViewChild, Inject, Renderer, ElementRef, AfterViewInit } from "@angular/core";
import { Routes, RouterModule, ActivatedRoute, Router } from "@angular/router";
import { KpiProvService } from "../../common-services/kpi-prov.service";
import { KpiOffServiceService } from '../../common-services/kpi-off-service.service';
import { Globals } from "../../common-services/global.service";
import { IndivService } from "../../common-services/indiv.service";
import { AlertService } from '../../alert.service';
import { ConfigService } from '../../common-services/config.service';
//import * as angular from "@angular/core";
require("highcharts/highcharts-more.js");



// import { PdfViewerComponent } from "../../helper/pdf-viewer/pdf-viewer.component";

@Component({
    selector: "app-kpi-prov-directive",
    templateUrl: "./kpi_prov_directive.component.html",
    styleUrls: ["./kpi_prov_directive.component.scss"],
    
})
export class KpiProvDirectiveComponent implements OnInit, AfterViewInit {
    @ViewChild('modalUpload') public modalUpload: any;
    @ViewChild('fileInput') fileInput: ElementRef;
    @ViewChild("tref", { read: ElementRef }) tref: ElementRef;

    config: any = [];
    prov_id: any;
    prov_code: any;
    prov_name: any;
    year: any;

    stg_id: string;
    stg_grp_id: string;
    loading: boolean = false;
    chart: any;
    chartOptions: any;
    dataChart: any = [];
    dataChartGuage: any = [];
    dataChartCompare: any = [];
    dataChartCompareOff: any = [];
    kpi: any = [];
    kpi_off: any = [];
    oldSnap: any = "";
    amp_id: any = "";
    compareModal: boolean = false;
    kpiId: any;
    kpiIdSend: any;
    kpi_id: any;
    paramKpi_id: any;
    selected: boolean = true;
    pdfModal: boolean = false;
    hospcode: string;
    /*collapsed1: boolean = false;
    collapsed2: boolean = false;
    collapsed3: boolean = false;*/
    indv: boolean = false;

    IndivRow: any = [];
    user_level: string;

    page: number = 1;
    totalPages: number;
    isLoaded: boolean = false;
    options: any;
    guageShow: boolean = true;
    compareOff: boolean = false;
    barShow: boolean = false;
    cupModal: boolean = false;
    tableAmpurModal: boolean = false;
    tableQuaterModal: boolean = false;
    send_kpi_id: any
    kpiNameModal: string;
    barExist: boolean = false;
    maxProgress: any = 0;

    kpiAarraySend: any = [];

    @ViewChild('viewer') viewer: any;

    //เวลาเปลี่ยน  route แล้ว ให้ tab เปลี่ยนไปเป็นอันแรก
    tableActive: boolean = false;
    guageActive: boolean = true;
    chartActive: boolean = true;
    indivActive: boolean = true;
    timeUse: any = 0;
    AppPdfModal: boolean = false;
    showPdf: boolean = false;
    showContent: boolean = true;
    pdfFilename: string = '';

    constructor(
        private route: ActivatedRoute,
        private kpiProvService: KpiProvService,
        private router: Router,
        private globals: Globals,
        private configService: ConfigService,
        private indivService: IndivService,
        @Inject('KPI_PREFIX') public docPrefix: string,
        private kpiOffServiceService: KpiOffServiceService,
        private renderer: Renderer,
        private eleRef: ElementRef,
        private alertService: AlertService,

    ) {
        this.route.params.subscribe(params => {
            this.kpi = [];
            this.stg_id = params["stg_id"];
            this.stg_grp_id = params["stg_grp_id"];
            this.paramKpi_id = params["kpi_id"];
            this.tableActive = false;
            this.guageActive = true;
            this.chartActive = true;
            this.indivActive = true;
            //console.log("kpiprovdi" + this.stg_id + ":" + this.stg_grp_id + "kpiId" + this.paramKpi_id);

            this.readConfig();
         

        });

        this.options = {
            pdfOpenParams: { toolbar: '1' },
            height: "450px"
        };
    }

    ngOnInit() {
        //ดึงค่าพื้นฐานต่าง ๆ
        

        this.hospcode = sessionStorage.getItem("hospcode");
        // this.prov_id = sessionStorage.getItem('prov_code');
        // console.log(this.stg_grp_id, '---', this.stg_grp_id, '*---*', this.prov_id);



        // console.log(this.hospcode);
        //this.createGauges();
        //this.defaulTab(event);
      
    }
    readConfig() {
        this.config = [];
        this.configService.readConfig()
            .then((rows: any) => {
                if (rows.ok) {
                    //console.log(rows);
                    this.config = rows.rows;
                    this.prov_id = this.config.prov_code;
                    // console.log(this.prov_id);
                    //this.ShowKpiAll(this.prov_id);

                    if (this.stg_id != undefined && this.stg_grp_id != undefined) {
                        this.ShowKpi(this.stg_id, this.stg_grp_id);
                    } else {
                        this.ShowKpiAll(this.prov_id);
                    }

                } else {
                    console.log('errr');
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error:197');
            })
    }
   


    ngAfterViewInit(): void {
        // outputs `I am span`
        // console.log(this.tref.nativeElement.textContent);
        // setTimeout(() => {
        //
        // }, 1000);
        //console.log(this.tref.nativeElement.textContent);

    }
    showPdfSim(pdfFilename) {
        // console.log(pdfFilename);
        this.pdfFilename = pdfFilename;
        this.showContent = false;
        this.showPdf = true;
    }
    showContentMain() {
        this.showContent = true;
        this.showPdf = false;
    }

    onloadFun() {
        this.alertService.error('Server Error');
    }
    appPdfModal() {
        this.AppPdfModal = true;
    }

    hiddenIndivTab() {
        if (this.hospcode) {
            this.indv = false;
        }
    }
    defaulTab(event: any) {
        console.log('click');
        event.preventDefault();
        let element: HTMLElement = document.getElementById('tab_1') as HTMLElement;
        element.click();
    }


    // Indiv
    // showindiv(kpi_id, hospcode, user_level) {
    //     this.indivService
    //         .getIndiv(kpi_id, hospcode, user_level)
    //         .then((rows: any) => {
    //             if (rows.ok) {
    //                 this.indv = rows.rows;
    //                 this.kpi_id = kpi_id;
    //                 this.loading =true;
    //             } else {
    //                 console.log(JSON.stringify(rows.error));
    //             }
    //         })
    //         .catch(() => {
    //             console.log("Server Error");
    //         });
    // }
    // close
    selectedChanged(selected) {
        this.selected = selected;
        console.log("In selected Changed", selected);
    }
    showPdfTemplate(templateId) {
        console.log(templateId);
        let url = `https://pdfobject.com/pdf/sample-3pp.pdf`;
        this.viewer.showPdf(url, this.options);
        this.pdfModal = true;
        // this.pdfviewerComponent.showPdf(templateId);
    }
    showIndiv(kpi_id) {
        this.maxProgress = 60;
        if (sessionStorage.getItem("hospcode")) {
            this.indv = true;
            this.kpi_id = kpi_id;

            this.tableActive = true;
            this.guageActive = true;
            this.chartActive = true;
            this.indivActive = false;
            setTimeout(() => {
                this.maxProgress = 100;
            }, 1000);
        } else {
            alert("คุณยังไม่ได้ ล๊อกอิน");
        }
        //console.log(this.indv);
    }
    showKpiQt(kpi_id) {
        this.kpiAarraySend = this.kpi.filter(
            kpi => kpi.kpi_id === kpi_id);
        this.send_kpi_id = kpi_id;
        this.tableQuaterModal = true;
    }
    // showExport(kpi_id) {
    //     if (sessionStorage.getItem("hospcode")) {
    //         this.indv = true;
    //         this.kpi_id = kpi_id;
    //     } else {
    //         alert("คุณยังไม่ได้ ล๊อกอิน");
    //     }
    //     console.log(this.indv);
    // }

    // showindiv(kpi_id) {
    //     if (sessionStorage.getItem('hospcode')) {
    //         this.indv = true;
    //         this.kpi_id = kpi_id;
    //     } else {
    //         alert("คุณยังไม่ได้ ล๊อกอิน");
    //     }
    //     console.log(this.indv);
    // }
    // สิ้นสุด Indiv

    // แสดงข้อมูลตาราง ระดับจังหวัด
    ShowKpiAll(prov_id) {
        console.log("SearchKpiID" + this.globals.glob_search_kpi_id);
        let searchKpiId = this.globals.glob_search_kpi_id;

        console.log(prov_id);
        this.kpi = [];
        this.dataChart = [];
        this.dataChartGuage = [];
        this.loading = true;

        this.kpiProvService.getKpi(prov_id)
            .then((rows: any) => {
                //  if (rows.rows.length > 0) {
                if (rows.ok) {
                    // console.log(rows.rows);
                    if (rows.rows.length > 0) {
                        if (searchKpiId != '') {
                            for (var i = 0; i < rows.rows.length; i++) {
                                if (rows.rows[i].kpi_id == searchKpiId) {
                                    this.kpi.push(rows.rows[i]);
                                }
                            }
                        }
                        else {
                            this.kpi = rows.rows;
                            // console.log(this.kpi);
                        }
                        //console.log(this.kpi);
                        this.loading = false;
                    } else {
                        this.loading = false;
                        // this.alertService.error('ตัวชี้วัดนี้ไม่มีข้อมูล');
                    }

                } else {
                    console.log(JSON.stringify(rows.error));
                    this.loading = false;
                }

            })
            .catch(() => {
                console.log("Server Error");
                this.loading = false;
                // this.alertService.error('Server Error');
            });


    }
    ShowKpi(stg_id, stg_grp_id) {
        if (this.paramKpi_id == 'undefined') {
            console.log("SearchKpiID" + this.paramKpi_id);
        }
        let searchKpiId = this.paramKpi_id;


        //console.log("Call Service");
        this.kpi = [];
        this.dataChart = [];
        this.dataChartGuage = [];
        this.loading = true;

        this.kpiProvService
            .getKpiProv(stg_id, stg_grp_id)
            .then((rows: any) => {
                //  if (rows.rows.length > 0) {
                if (rows.ok) {
                    //console.log(rows.rows);
                    if (rows.rows.length > 0) {
                        if (searchKpiId != undefined) {
                            for (var i = 0; i < rows.rows.length; i++) {
                                if (rows.rows[i].kpi_id == searchKpiId) {
                                    this.kpi.push(rows.rows[i]);
                                }
                            }
                        }
                        else {
                            this.kpi = rows.rows;
                            // console.log(this.kpi);
                        }
                        //console.log(this.kpi);
                        this.loading = false;
                    } else {
                        this.loading = false;
                        // this.alertService.error('ตัวชี้วัดนี้ไม่มีข้อมูล');
                    }

                } else {
                    console.log(JSON.stringify(rows.error));
                    this.loading = false;
                }

            })
            .catch(() => {
                console.log("Server Error");
                this.loading = false;
                // this.alertService.error('Server Error');
            });


    }

    // แสดงชาร์ท ระดับจังหวัด
    ShowChartviewProvGuage() {
        this.maxProgress = 60;
        let c = 0;
        let t = 0;
        this.timeUse = 0;
        let d = performance.now();
        c++;
        // this.dataChartGuage = [];
        //console.log("lenGuage"+this.dataChartGuage.length);

        if (this.dataChartGuage.length == 0) {
            this.loading = true;
            let i = 0;
            let arrX = [];
            let arrY = [];
            let yColor: any;
            let yGuageColor1: any;
            let yGuageColor2: any;
            let borderPane: any;
            let yAxisMin: number;
            for (i = 0; i < this.kpi.length; ++i) {
                let x = [this.kpi[i].dp_prov];
                let y: number = this.kpi[i].dp_rate;
                let u: number = this.kpi[i].kpi_tar;
                let z = this.kpi[i].kpi_name;

                if (this.kpi[i].kpi_type_data == 1) {
                    // 1 ค่าน้อยดี
                    yGuageColor1 = "#55BF3B";//green
                    yGuageColor2 = "#DF5353"; //red                    

                    if (y < u) {
                        borderPane = "#55BF3B"; //green  เส้นรอบนอก
                    } else {
                        borderPane = "#DF5353"; //red
                    }
                    if (y < 0) {
                        yAxisMin = y;
                    } else {
                        yAxisMin = 0;
                    }

                } else {
                    // 0 ค่ามากดี
                    yGuageColor1 = "#DF5353"; //red 
                    yGuageColor2 = "#55BF3B"; //green

                    if (y < u) {
                        borderPane = "#DF5353"; //red เส้นรอบนอก
                    } else {
                        borderPane = "#55BF3B";
                    }
                    if (y < 0) {
                        yAxisMin = y;
                    } else {
                        yAxisMin = 0;
                    }

                }

                //this.CreateChart(x, y, z, u, yColor);
                this.createGauges(x, y, z, u, yAxisMin, yGuageColor1, yGuageColor2, borderPane);//, yGuageColorRed, yGuageColorGreen
                t += performance.now() - d;
                this.timeUse += performance.now() - d;

            }
            //console.log(this.dataChartGuage);
            this.loading = false;
        } else {
            console.log("สร้างชาร์ทไปก่อนหน้าแล้ว");
            this.loading = false;
        }
        console.log("C" + c);
        console.log("D" + d);
        console.log("T" + t);
        console.log("T" + this.timeUse);

    }

    createGauges(x, y, z, u, yAxisMin, yGuageColor1, yGuageColor2, borderPane) {
        this.chart = [];
        this.maxProgress = 80;
        this.chart = {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: z,
                style: { "color": "#333333", "fontSize": "12px" }
            },
            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#FFF'],
                            [1, '#333']
                        ]
                    },
                    borderWidth: 14,
                    borderColor: borderPane,//'#32CD32',//green  #FF0000//red สีเส้นนอก
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#333'],
                            [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },
            // the value axis
            yAxis: {
                min: yAxisMin,  //default 0
                max: 100,
                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',
                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: ' ร้อยละ'
                },
                //ค่าคะแนนผ่านเกณฑ์
                plotBands: [{
                    from: yAxisMin,
                    to: u,  //รับค่า จาก kpi_target  50
                    // color:'#DF5353'
                    color: yGuageColor1 //'#DF5353' // red
                }, { //ค่าใกล้เส้นผ่าน
                    from: u - 1,
                    to: u,
                    color: '#DDDF0D' // yellow
                }, {  //ค่าที่ผ่านเกณฑ์
                    from: u,
                    to: 100,
                    // color:'#55BF3B'
                    color: yGuageColor2  // '#55BF3B' // green
                }]
            },
            series: [{
                name: "ผลงาน",
                data: [y],  //80
                tooltip: {
                    valueSuffix: "%"
                }
            }]
        }

        this.dataChartGuage.push(this.chart);
        
    }

    // แสดงชาร์ท ระดับจังหวัด
    ShowChartviewProvBar() {
        //this.dataChart = [];
        this.maxProgress = 60;
        this.loading = true;
        if (this.dataChart.length == 0) {
            let i = 0;
            let arrX = [];
            let arrY = [];
            let yColor: any;
            let yAxisMin: number;
            for (i = 0; i < this.kpi.length; ++i) {
                let x = [this.kpi[i].dp_prov];
                let y: number = this.kpi[i].dp_rate;
                let u: number = this.kpi[i].kpi_tar;
                let z = this.kpi[i].kpi_name;

                if (this.kpi[i].kpi_type_data == 0) {
                    if (y >= u) {
                        yColor = "#55BF3B";//green
                    } else {
                        yColor = "#DF5353"; //red
                    }
                } else {
                    if (y <= u) {
                        yColor = "#55BF3B";//green
                    } else {
                        yColor = "#DF5353"; //red
                    }

                }                

                this.CreateChart(x, y, z, u, yColor);
            }

            this.loading = false;

        } else {
            console.log("สร้างชาร์ทไปก่อนหน้าแล้ว");
            this.loading = false;
        }

    }
    // ฟังชั่นสร้างชาร์ท
    CreateChart(x, y, z, u, yColor) {
        this.maxProgress = 90;
        // this.dataChart = [];
        this.loading = true;
        this.chartOptions = {
            chart: {
                type: "column",
                animation: {
                    duration: 1000
                }
            },
            title: {
                text: z,
                style: {
                    color: "#333333",
                    fontSize: "12px"
                }
            },
            subtitle: {
                text: ""
            },
            xAxis: {
                categories: x,
                tickInterval: 1
            },
            yAxis: {
                min: 0,
                max: 100,
                plotLines: [
                    {
                        value: u,
                        color: "rgb(220, 54, 54)", // '#ff0000',
                        width: 2,
                        zIndex: 4,
                        label: { text: "เกณฑ์ผ่าน " + u + " %" }
                    }
                ]
            },
            series: [
                {
                    name: "หน่วยงานข้อมูล",
                    data: [y],
                    color: yColor //สีฟ้า"rgb(46, 150, 208)" // เขียวตอง'rgb(136, 219, 5)'//ฟ้าคราม'rgb(46, 150, 208)'//แดง'rgb(220, 54, 54)'
                }
            ]
        };

        this.dataChart.push(this.chartOptions);
        // console.log(this.me);
    }
    showCompareOff(kpi_id, amp_id, ampurname) {
        //this.cupModal = true;
        this.kpi_off = [];
        this.kpiOffServiceService
            .getKpiOff(kpi_id, amp_id)
            .then((rows: any) => {
                if (rows.rows.length) {
                    if (rows.ok) {
                        let i = 0;
                        let arrX = [];
                        let arrY = [];
                        let yColor = [];
                        for (i = 0; i < rows.rows.length; ++i) {

                            arrX.push(rows.rows[i].names.replace("โรงพยาบาลส่งเสริมสุขภาพตำบล", "รพสต."));
                            arrY.push(parseInt(rows.rows[i].do_rate));
                            let u = rows.rows[i].kpi_tar;
                            let z = rows.rows[i].kpi_name;                         
                            let y: number = rows.rows[i].do_rate;


                            // if (this.kpi[i].kpi_type_data == 0) {
                            //     if (y >= u) {
                            //         yColor.push("#55BF3B");//green
                            //     } else {
                            //         yColor.push("#DF5353"); //red
                            //     }
                            // } else {
                            //     if (y <= u) {
                            //         yColor.push("#55BF3B");//green
                            //     } else {
                            //         yColor.push("#DF5353"); //red
                            //     }
            
                            // }   


                            if (rows.rows[i].kpi_type_data == 0) {
                                if (arrY[i] >= u) {
                                    yColor.push("#55BF3B");//green
                                } else {
                                    yColor.push("#DF5353"); //red
                                }
                            } else {
                                if (arrY[i] <= u) {
                                    yColor.push("#55BF3B");//green
                                } else {
                                    yColor.push("#DF5353"); //red
                                }

                            }
                        }
                        // console.log(arrX);
                        let u = rows.rows[0].kpi_tar;
                        let z = rows.rows[0].kpi_name;
                        this.CreateChartCompareOff(arrX, arrY, z, u, yColor, ampurname);
                        this.compareOff = true;



                        this.loading = false;
                    } else {
                        console.log(JSON.stringify(rows.error));
                    }
                } else {
                    console.log("สร้างชาร์ทไปก่อนหน้าแล้ว");
                    this.loading = false;
                }
            })
            .catch(() => {
                console.log("Server Error");
                this.loading = false;
                // this.alertService.error('Server Error');
            });

    }
    showCompare(kpi_id) {
        this.compareModal = true;
        this.loading = true;
        //console.log(kpi_id);
        this.kpiProvService
            .getChartCompare(kpi_id)
            .then((rows: any) => {
                // if (rows.rows.length>0) {
                if (rows.ok) {
                    //console.log(rows.rows);
                    let i = 0;
                    let arrX = [];
                    let arrY = [];
                    let yColor = [];
                    let ampurcode = [];
                    for (i = 0; i < rows.rows.length; ++i) {
                        arrX.push(rows.rows[i].amphurname);
                        arrY.push(Number.parseInt(rows.rows[i].da_rate));
                        let u = rows.rows[i].kpi_tar;
                        let z = rows.rows[i].kpi_name;
                        ampurcode.push(rows.rows[i].da_amp);

                        if (rows.rows[i].kpi_type_data == 0) {
                            if (arrY[i] >= u) {
                                yColor.push("#55BF3B");//green
                            } else {
                                yColor.push("#DF5353"); //red
                            }
                        } else {
                            if (arrY[i] <= u) {
                                yColor.push("#55BF3B");//green
                            } else {
                                yColor.push("#DF5353"); //red
                            }

                        }


                        //     if (rows.rows[i].kpi_type_data == 1) {
                        //         if (arrY[i] >= u) {
                        //             yColor.push("#55BF3B");//green
                        //         } else {
                        //             yColor.push("#DF5353"); //red
                        //         }
                        //     } else {
                        //         yColor.push("#DF5353"); //red
                        //     }
                        // } else {
                        //     if (arrY[i] <= u) {
                        //         yColor.push("#55BF3B");//green
                        //     } else {
                        //         yColor.push("#DF5353"); //red
                        //     }

                        // }
                    }
                    // console.log(arrX);
                    let u = rows.rows[0].kpi_tar;
                    let z = rows.rows[0].kpi_name;
                    let kpi_id = rows.rows[0].da_kpi;
                    // CreateChartCompare(x, y, z, u, yColor, kpi_id, ampurcode) {
                    this.CreateChartCompare(arrX, arrY, z, u, yColor, kpi_id, ampurcode);

                    this.loading = false;
                } else {
                    console.log(JSON.stringify(rows.error));
                }
                // } else {
                //     console.log("ไม่พบข้อมูลที่ค้นหา");
                //     this.loading = false;
                // }
            })
            .catch(() => {
                console.log("Server Error");
                this.loading = false;
                // this.alertService.error('Server Error');
            });
    }


    CreateChartCompare(x, y, z, u, yColor, kpi_id, ampurcode) {

        this.dataChartCompare = [];
        this.dataChartCompareOff = []; //clear data office to
        this.chartOptions = {

            chart: {
                type: "column",
                //height: (6 / 16 * 100) + '%', // 16:5 ratio
                animation: window["Highcharts"].svg
            },
            title: {
                text: z,  //ชื่อ kpi
                style: {
                    color: "#333333",
                    fontSize: "12px"
                }
            },
            subtitle: {
                text: "เปรียบเทียบระดับอำเภอ"
            },
            xAxis: {
                categories: x, //ชื่ออำเภอ
                tickInterval: 1,
                labels: {
                    step: 1,
                    rotation: -25
                },
                dataLabels: {
                    enabled: true,
                    crop: false,
                    overflow: 'none',
                    allowOverlap: true

                }
            },
            yAxis: {
                min: 0,
                max: 100,
                plotLines: [
                    {
                        value: u,  //ค่าคะแนนเกณฑ์ผ่าน
                        color: "#ff0000",
                        width: 2,
                        zIndex: 4,
                        label: { text: "เกณฑ์ผ่าน " + u + " %" }
                    }
                ]
            },
            series: [
                {
                    name: "หน่วยงานข้อมูล",
                    data: y,//คะแนนผลงาน_,
                    dataAmpcode: ampurcode

                }
            ],
            colors: yColor,
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function (e) {
                                const ampurname = e.point.category;
                                const idx = e.point.x //index  of  serie chart
                                //alert(ampurcode[p]);
                                this.showCompareOff(kpi_id, ampurcode[idx], ampurname);
                                // this.myComponentMethod(p.category,p.series.name);
                            }.bind(this)
                        }
                    }
                },
                column: {
                    colorByPoint: true,
                    dataLabels: {
                        //rotation:75,
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        allowOverlap: true

                    }
                }
            },
            responsive: {
                chart: {
                    // type: "column",
                    height: (12 / 16 * 100) + '%', // 16:5 ratio
                    // animation: window["Highcharts"].svg
                },
                rules: [{

                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal'
                        },
                        yAxis: {
                            min: 0,
                            max: 100,
                            plotLines: [
                                {
                                    value: u,
                                    color: "#ff0000",
                                    width: 2,
                                    zIndex: 4,
                                    label: { text: "เกณฑ์ผ่าน " + u + " %" }
                                }
                            ],
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -5
                            },
                            title: {
                                text: null
                            }
                        },
                        subtitle: {
                            text: null
                        },
                        credits: {
                            enabled: false
                        }
                    }
                }]
            }
        }

        this.dataChartCompare.push(this.chartOptions);
    }
    CreateChartCompareOff(x, y, z, u, yColor, ampurname) {
        this.dataChartCompareOff = [];
        this.chartOptions = {
            chart: {
                type: "column",
                //height: (6 / 16 * 100) + '%', // 16:5 ratio
                animation: window["Highcharts"].svg
            },
            title: {
                text: '',//z,
                style: {
                    color: "#333333",
                    fontSize: "12px"
                }
            },
            subtitle: {
                text: "เปรียบเทียบหน่วยบริการ อำเภอ" + ampurname
            },
            xAxis: {
                categories: x,
                tickInterval: 1,
                labels: {
                    step: 1,
                    rotation: -25
                },
                dataLabels: {
                    enabled: true,
                    crop: false,
                    overflow: 'none',
                    allowOverlap: true

                }
            },
            yAxis: {
                min: 0,
                max: 100,
                plotLines: [
                    {
                        value: u,
                        color: "#ff0000",
                        width: 2,
                        zIndex: 4,
                        label: { text: "เกณฑ์ผ่าน " + u + " %" }
                    }
                ]
            },
            series: [
                {
                    name: "หน่วยงานข้อมูล",
                    data: y,

                }
            ],
            colors: yColor,
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: (e) => {
                                // this.showCompareOff(kpi_id,amp_id);
                            },
                        }
                    }
                },
                column: {
                    colorByPoint: true,
                    dataLabels: {
                        //rotation:75,
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        allowOverlap: true

                    }
                }
            },
            responsive: {
                chart: {
                    // type: "column",
                    height: (12 / 16 * 100) + '%', // 16:5 ratio
                    // animation: window["Highcharts"].svg
                },
                rules: [{

                    condition: {
                        maxWidth: 500,

                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal'
                        },
                        yAxis: {
                            min: 0,
                            max: 100,
                            plotLines: [
                                {
                                    value: u,
                                    color: "#ff0000",
                                    width: 2,
                                    zIndex: 4,
                                    label: { text: "เกณฑ์ผ่าน " + u + " %" }
                                }
                            ],
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -5
                            },
                            title: {
                                text: null
                            }
                        },
                        subtitle: {
                            text: null
                        },
                        credits: {
                            enabled: false
                        }
                    }
                }]
            }
        }

        this.dataChartCompareOff.push(this.chartOptions);
    }



    expandByAmpur(kpi_id) {
        // console.log(kpi_id);
    }

    offTableData() {
        this.indv = false;
    }


    showTableAmpur(kpi_id, kpi_name) {
        this.send_kpi_id = kpi_id;
        this.kpiNameModal = kpi_name;
        this.tableAmpurModal = true;

    }
    tableShow() {
        this.maxProgress = 50;
        this.tableActive = false;
        this.guageActive = true;
        this.chartActive = true;
        this.indivActive = true;
        setTimeout(() => {
            this.maxProgress = 100;
        }, 1000);

    }
    guagShow() {

        this.maxProgress = 10;
        this.tableActive = true;
        this.guageActive = false;
        this.chartActive = true;
        this.indivActive = true;
        setTimeout(() => {
            this.maxProgress = 60;
            this.ShowChartviewProvGuage();
        }, 1000);
        let me = '';
        this.git(5, this.me());

    }
    git(limit, callback) {
        var i = 0;
        var checkExist = setInterval(function () {
            if ($('#me3').length) {
                console.log("Exists!");
                this.maxProgress = 90;
                clearInterval(checkExist);
                callback;
            }

        }, 100);
    }
    me() {
        console.log('tt');
        setTimeout(() => {
            this.maxProgress = 100;
        }, 1000);
    }
    chartShow() {
        this.maxProgress = 70;
        this.tableActive = true;
        this.guageActive = true;
        this.chartActive = false;
        this.indivActive = true;
        setTimeout(() => {
            this.maxProgress = 80;
            this.ShowChartviewProvBar();
        }, 1000);
        setTimeout(() => {

            this.maxProgress = 100;
        }, 1000);

    }
    // indShow() {
    //
    //     this.tableActive = true;
    //     this.guageActive = true;
    //     this.chartActive = true;
    //     this.indivActive = false;

    //     setTimeout(() => {
    //
    //     }, 1000);
    //
    // }

    uploadFile(kpi_id) {
        console.log("check kpi id value");
        console.log(kpi_id);
        this.modalUpload.openModal(kpi_id, this.docPrefix);
    }
}
