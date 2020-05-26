import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StgService } from '../common-services/stg.service';
import { StggroupService } from '../common-services/stggroup.service';
import { Globals } from '../common-services/global.service';
import { AlertService } from '../alert.service';

@Component({
    selector: 'app-kpi-ampur',
    templateUrl: './kpi_ampur.component.html',
    styleUrls: ['./kpi_ampur.component.css']
})
export class KpiAmpurComponent implements OnInit {

    stg_id: any;
    stg_grp_id: any;
    amp_id: any;
    kpi: any = [];
    stgId: any;
    stgGrpId: any;
    getStggroup: any = [];
    getStg: any = [];
    stg_group_name: any;
    stg_name: any;
    ampur_name: any;
    ampurList: any = [];
    ampurModal: boolean = false;
    ampurNameMassage: string;
    //@Input() childMessage: string;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private stgService: StgService,
        private stgGroupService: StggroupService,
        private globals: Globals,
        private alertService: AlertService

    ) {

        this.route.params.subscribe((params) => {
            this.amp_id = params['amp_id'];
            this.stg_id = params['stg_id'];
            this.stg_grp_id = params['stg_grp_id'];
            //console.log(this.amp_id);
            //console.log(this.stg_grp_id);
            this.getAmpurName(this.amp_id);
            //ในกรณีที่มีการ เปลี่ยนอำเภอ หรือเปลี่ยตัวชี้วัด ส่งค่าไปให้  global  เพื่อให้ global  ส่งค่าต้องให้  layout component
            this.sendStgId(this.stg_id);
            this.sendStgGrpId(this.stg_grp_id);
            this.sendAmpurId(this.amp_id);

            
            //console.log(this.amp_id);

        });

        //this.sendAmpurName(this.ampur_name);
        //console.log(this.ampur_name);
    }

    ngOnInit() {
        //console.log("childeMessage" + this.childMessage);/
        //this.ShowStgGroup();
        //this.ShowStg();
    }
    sendAmpurName(massage) {
        this.globals.changAmpurName(massage);
    }
    sendAmpurId(massage) {
        this.globals.changAmpurId(massage);
    }
    sendStgId(massage) {
        this.globals.changStgId(massage);
    }
    sendStgGrpId(massage) {
        this.globals.changStgGrpId(massage);
    }

    findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i].amphurname;
            }
        }
        return null;
    }

    acceptAmpur(amphurname) {
        this.ampurModal = false;
        this.ampur_name = amphurname;
    }
    getAmpurName(amp_id) {
        let prov_id = sessionStorage.prov_code;
        this.ampurList = [];
        this.stgService.getAmphurList(prov_id)
            .then((rows: any) => {
                if (rows.ok) {
                    this.ampurList = rows.rows;
                    //console.log(this.ampurList);
                    let ampurNameFilter = this.ampurList.filter(function (hero) {
                        return hero.amphurcode == amp_id;
                    });
                    let ampurName = ampurNameFilter[0].amphurname;
                    //console.log(stgNameFilter[0].stg_name);
                    this.sendAmpurName(ampurName);

                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
                this.alertService.error('Server Error');
            })
    }
    getAmpherList() {
        let prov_id = sessionStorage.prov_code;
        //console.log(prov_id);
        this.ampurList = [];
        this.stgService.getAmphurList(prov_id)
            .then((rows: any) => {
                if (rows.ok) {
                    this.ampurList = rows.rows;
                    this.ampurModal = true;
                    console.log(this.ampurList);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
                this.alertService.error('Server Error');
            })
    }
    ShowStgGroup() {
        this.getStggroup = [];
        this.stgGroupService.getStgGroup()
            .then((rows: any) => {
                if (rows.ok) {
                    this.getStggroup = rows.rows;
                    this.stg_group_name = this.getStggroup[(this.stg_grp_id - 1)].stg_group_name;
                    // console.log(this.stg_group_name);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
                this.alertService.error('Server Error');
            })
    }

    ShowStg() {
        this.getStg = [];
        this.stgService.getStg()
            .then((rows: any) => {
                if (rows.ok) {
                    this.getStg = rows.rows;
                    this.stg_name = this.getStg[(this.stg_id - 1)].stg_name;
                    console.log(this.stg_name);
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
