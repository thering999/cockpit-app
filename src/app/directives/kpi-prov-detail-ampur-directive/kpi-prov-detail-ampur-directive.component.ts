import { Component, OnInit, Input } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { KpiProvService } from '../../common-services/kpi-prov.service';
import { fade } from 'clarity-angular';
import { AlertService } from '../../alert.service';

@Component({
    selector: 'app-kpi-prov-detail-ampur-directive',
    templateUrl: './kpi-prov-detail-ampur-directive.component.html',
    styleUrls: ['./kpi-prov-detail-ampur-directive.component.css']
})
export class KpiProvDetailAmpurDirectiveComponent implements OnInit {
    @Input() kpiId: string;
    loading: boolean = false;
    kpiDetail: any = [];
    stg_id: any;
    stg_grp_id: any;
    getColor(country) { 
        switch (country) {
          case 'UK':
            return 'green';
          case 'USA':
            return 'blue';
          case 'HK':
            return 'red';
        }
      }
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private kpiProvService: KpiProvService,
        private alertService: AlertService
    ) {
        this.route.params.subscribe(params => {
            this.stg_id = params['stg_id'];
            this.stg_grp_id = params['stg_grp_id'];
            //console.log(this.stg_id);
        });
    }

    ngOnInit() {
        // Make the server call
        //console.log("kpiId"+this.kpiId);
        this.showDetailByAmpur(this.kpiId);
    }
    showDetailByAmpur(kpiId) {
        this.loading = true;
        this.kpiDetail = [];
        this.kpiProvService.showDetailByAmpur(kpiId)
            .then((rows: any) => {
                if (rows.rows.length) {
                    if (rows.ok) {
                        this.kpiDetail = rows.rows;
                        console.log(this.kpiDetail);
                        this.loading = false;
                    } else {
                        this.loading = false;
                        console.log(JSON.stringify(rows.error));
                    }
                } else {
                    console.log("ไม่พบข้อมูลที่ค้นหา");
                    this.loading = false;
                }
            })
            .catch(() => {
                this.loading = false;
                this.alertService.error('Server Error');
            })
    }

}
