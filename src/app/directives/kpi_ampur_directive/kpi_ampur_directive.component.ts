import { Component, OnInit, Inject } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Globals } from "../../common-services/global.service";
import { KpiAmpurService } from '../../common-services/kpi-ampur.service';
import { AlertService } from '../../alert.service';
import { ConfigService } from '../../common-services/config.service';

require("highcharts/highcharts-more.js");

@Component({
    selector: 'app-kpi-ampur-directive',
    templateUrl: './kpi_ampur_directive.component.html',
    styleUrls: ['./kpi_ampur_directive.component.scss']
})
export class KpiAmpurDirectiveComponent implements OnInit {
    stg_id: string;
    stg_grp_id: string;
    loading: boolean = false;
    chart: any;
    chartOptions: any;
    dataChart: any = [];
    kpi: any = [];
    // prov_id: string = '';
    amp_id: any = '';
    compareModal: boolean = false;
    dataChartCompare: any = [];
    indv: boolean = false;
    kpi_id: any;
    hospcode: string;
    guageShow: boolean = true;
    barShow: boolean = false;
    cupModal: boolean = false;
    tableOffModal: boolean = false;
    send_kpi_id: any;
    send_amp_id: any;
    dataChartGuage: any = [];
    tableQuaterModal: boolean = false;
    kpiAarraySend: any = [];
    config: any = [];

    valProgress: any = 0;
    //เวลาเปลี่ยน  route แล้ว ให้ tab เปลี่ยนไปเป็นอันแรก
    tableActive: boolean = false;
    guageActive: boolean = true;
    chartActive: boolean = true;
    indivActive: boolean = true;

    constructor(
        // @Inject('prov_code') private prov_code: string,
        private route: ActivatedRoute,
        private kpiAmpurService: KpiAmpurService,
        private globals: Globals,
        private router: Router,
        private alertService: AlertService,
        private configService: ConfigService
    ) {
        this.route.params.subscribe(params => {
            this.kpi = [];
            // this.prov_id = prov_code;

            // console.log("lenKPITEMP="+ this.check_kpi);
            this.amp_id = params['amp_id'];
            // console.log(this.amp_id);
            this.stg_id = params['stg_id'];
            this.stg_grp_id = params['stg_grp_id'];
            this.tableActive = false;
            this.guageActive = true;
            this.chartActive = true;
            this.indivActive = true;
            this.ShowKpi(this.amp_id, this.stg_id, this.stg_grp_id)
        });

    }

    ngOnInit() {
        this.hospcode = sessionStorage.getItem("hospcode");
    }
    showIndiv(kpi_id) {
        if (sessionStorage.getItem("hospcode")) {
            this.indv = true;
            this.kpi_id = kpi_id;
        } else {
            alert("คุณยังไม่ได้ ล๊อกอิน");
        }
        // console.log(this.indv);
    }

    readConfig() {
        this.config = [];
        this.configService.readConfig()
            .then((rows: any) => {

                if (rows.ok) {
                    //console.log(rows);
                    this.config = rows.rows;
                    console.log(this.config);
                } else {
                    console.log('errr');
                }
            })
            .catch(() => {
                console.log("Server Error");
                // this.alertService.error('Server Error:197');
            })
    }


    // แสดงชาร์ท ระดับอำเภอ
    
    // แสดงข้อมูลตาราง ระดับอำเภอ
    ShowKpi(amp_id, stg_id, stg_grp_id) {
        //console.log("SearchKpiID"+this.globals.glob_search_kpi_id);
        let searchKpiId = this.globals.glob_search_kpi_id;
        this.valProgress = 20;
        //console.log("Call Service");
        this.kpi = [];
        this.dataChart = [];
        this.dataChartGuage = [];
        this.loading = true;
        this.kpiAmpurService.getKpiAmpur(amp_id, stg_id, stg_grp_id)
            .then((rows: any) => {
                //  if (rows.rows.length > 0) {
                if (rows.ok) {
                    //console.log("me"+rows.rows[1].kpi_id);
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
                        }
                        //console.log(this.kpi);
                        this.loading = false;
                    } else {
                        this.loading = false;
                        // this.alertService.error('ตัวชี้วัดนี้ไม่มีข้อมูล');
                    }
                    this.valProgress = 100;

                } else {
                    console.log(JSON.stringify(rows.error));
                }

            })
            .catch(() => {
                console.log("Server Error");
                this.loading = false;
                // this.alertService.error('Server Error177');
            });


    }
    showCompareOff(amp_id, kpi_id) {
        this.compareModal = true;
        this.loading = true;
        // console.log(kpi_id);
        this.kpiAmpurService.getChartCompare(amp_id, kpi_id)
            .then((rows: any) => {
                if (rows.rows.length > 0) {
                    if (rows.ok) {
                        // console.log(rows.rows);
                        let i = 0;
                        let arrX = [];
                        let arrY = [];
                        let u = rows.rows[0].kpi_tar;
                        let z = rows.rows[0].kpi_name;
                        let yColor = [];
                        for (i = 0; i < rows.rows.length; ++i) {
                            arrX.push(rows.rows[i].names.replace("โรงพยาบาลส่งเสริมสุขภาพตำบล", "รพสต."));
                            arrY.push(Number.parseInt(rows.rows[i].do_rate));
                        
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
                        // console.log(yColor);
                        this.CreateChartCompare(arrX, arrY, z, u, yColor);

                        this.loading = false;
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

    // ฟังชั่นสร้างชาร์ท
    CreateChart(x, y, z, u, yColor) {

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
                    color: "green",
                    fontSize: "12px"
                }
            },
            subtitle: {
                text: ""
            },
            xAxis: {
                categories: x
            },
            yAxis: {
                min: 0,
                max: 100,
                plotLines: [
                    {
                        value: u,
                        color: "rgb(220, 54, 54)",
                        // '#ff0000',
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
                    color: yColor
                    // สีฟ้า"rgb(46, 150, 208)" // เขียวตอง'rgb(136, 219, 5)'//ฟ้าคราม'rgb(46, 150, 208)'//แดง'rgb(220, 54, 54)'
                }
            ]
        };

        this.dataChart.push(this.chartOptions);
        // console.log(this.me);
    }
    CreateChartCompare(x, y, z, u, yColor) {
        this.dataChartCompare = [];

        this.chartOptions = {
            chart: {
                type: "column",
                // height: (6 / 16 * 100) + '%', // 16:5 ratio
                animation: window["Highcharts"].svg
            },
            title: {
                text: '',
                style: {
                    color: "green",
                    fontSize: "12px"
                }
            },
            subtitle: {
                text: "เปรียบเทียบหน่วยบริการ"
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
                        // rotation:75,
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        allowOverlap: true

                    }
                }
            },

        }

        this.dataChartCompare.push(this.chartOptions);
        // console.log(this.dataChartCompare);
    }

    createGauges(x, y, z, u, yAxisMin, yGuageColor1, yGuageColor2, borderPane) {
        //console.log(yAxisMin);
        this.loading = true;
        this.chart = {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: z
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
                    borderColor: borderPane,//'#32CD32',//green  #FF0000//red
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
                    color: yGuageColor1
                }, { //ค่าใกล้เส้นผ่าน
                    from: u - 1,
                    to: u,
                    color: '#DDDF0D' // yellow
                }, {  //ค่าที่ผ่านเกณฑ์
                    from: u,
                    to: 100,
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
        //console.log(this.dataChartGuage);
    }

    offTableData() {
        this.indv = false;
    }

    showTableOff(kpi_id, da_amp) {
        this.send_kpi_id = kpi_id;
        this.send_amp_id = da_amp;
        // alert(this.send_kpi_id);
        this.tableOffModal = true;
    }
    showKpiQt(kpi_id) {

        this.kpiAarraySend = this.kpi.filter(
            kpi => kpi.kpi_id === kpi_id);

        this.send_kpi_id = kpi_id;
        this.tableQuaterModal = true;
    }

    // แสดงชาร์ท ระดับอำเภอ
    ShowChartviewGuage() {
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
                let x = [this.kpi[i].da_prov];
                let y: number = this.kpi[i].da_rate;
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

                this.createGauges(x, y, z, u, yAxisMin, yGuageColor1, yGuageColor2, borderPane);
            }
            //console.log(this.dataChartGuage);
            this.loading = false;
        } else {
            //console.log("สร้างชาร์ทไปก่อนหน้าแล้ว");
            this.loading = false;
        }

    }
    // แสดงชาร์ท ระดับอำเภอ
    ShowChartviewBar() {
        //this.dataChart = [];
        this.loading = true;
        if (this.dataChart.length == 0) {
            let i = 0;
            // let arrX = [];
            // let arrY = [];
            let yColor: any;
            // let yGuageColorRed: any;
            // let yGuageColorGreen: any;
            // let yAxisMin: number;
            for (i = 0; i < this.kpi.length; ++i) {
                let x = [this.kpi[i].da_prov];
                let y: number = this.kpi[i].da_rate;
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
    tableShow() {
        this.valProgress = 20;
        this.tableActive = false;
        this.guageActive = true;
        this.chartActive = true;
        this.indivActive = true;
        setTimeout(() => {
            this.valProgress = 100;
        }, 200);

    }
    guagShow() {
        this.valProgress = 20;
        this.tableActive = true;
        this.guageActive = false;
        this.chartActive = true;
        this.indivActive = true;
        setTimeout(() => {
            this.ShowChartviewGuage();
            this.valProgress = 100;
        }, 500);
        // setTimeout(() => {
        //     this.valProgress =100;
        // }, 1000);


    }
    chartShow() {
        this.valProgress = 20;
        this.tableActive = true;
        this.guageActive = true;
        this.chartActive = false;
        this.indivActive = true;
        setTimeout(() => {
            this.ShowChartviewBar();
            this.valProgress = 100;
        }, 400);

    }


}
