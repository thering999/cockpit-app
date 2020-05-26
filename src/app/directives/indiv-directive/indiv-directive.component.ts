import { Component, OnInit, Input, Pipe, PipeTransform, Inject } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { IndivService } from '../../common-services/indiv.service';
import { KeysPipe } from '../../helper/key-object.pipe';
import { AlertService } from '../../alert.service'
import { Http, Headers, RequestOptions } from "@angular/http";


@Component({
    selector: 'app-indiv-directive',
    templateUrl: './indiv-directive.component.html',
    styleUrls: ['./indiv-directive.component.css'],


})
export class IndivDirectiveComponent implements OnInit {
    @Input() kpiIdSend: string;
    hospcode: string = '';
    userLevel: string = '';
    kpi_id: string = '';
    indiv: any = [];
    loading: boolean = false;
    headTable: any = [];
    cupcode: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private indivService: IndivService,
        private alertService: AlertService,
        @Inject("API_URL") private url: string,
        private http: Http,
    ) {


    }

    ngOnInit() {
        console.log(this.kpiIdSend);
        this.kpi_id = this.kpiIdSend;
        this.hospcode = sessionStorage.getItem('hospcode');
        this.userLevel = sessionStorage.getItem('userLevel');
        this.cupcode = sessionStorage.getItem('cupcode');
        this.showIndiv(this.kpi_id, this.hospcode, this.userLevel)
    }
    showIndiv(kpi_id, hospcode, userLevel) {
        this.loading = true;
        this.indiv = [];
        this.headTable = [];
        this.indivService.getIndiv(kpi_id, hospcode, userLevel)
            .then((rows: any) => {
                if (rows.ok) {
                    this.headTable = rows.rows[0];
                    this.indiv = rows.rows;
                    console.log(this.headTable);
                    this.loading = false;
                } else {
                    console.log(JSON.stringify(rows.error));
                    alert(JSON.stringify(rows.error));
                    this.loading = false;
                }
            })
            .catch(() => {
                console.log("Server Error")
                // this.alertService.error('Server Error');
            })
    }

    exportIndivExcel() {
        this.loading = true;

        const url = `${this.url}/indv/export/excel/${this.kpi_id}/${this.hospcode}/${this.userLevel}/${this.cupcode}`;
        window.open(url);

    }

}

