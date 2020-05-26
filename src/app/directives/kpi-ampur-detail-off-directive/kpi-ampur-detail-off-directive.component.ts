import { Component, OnInit, Input } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { KpiOffServiceService } from '../../common-services/kpi-off-service.service';
import { AlertService } from '../../alert.service';

@Component({
  selector: 'app-kpi-ampur-detail-off-directive',
  templateUrl: './kpi-ampur-detail-off-directive.component.html',
  styleUrls: ['./kpi-ampur-detail-off-directive.component.css']
})
export class KpiAmpurDetailOffDirectiveComponent implements OnInit {
  @Input() kpiId: string;
  @Input() ampId: string;
  kpi_id: any;
  amp_id: any;
  loading: boolean;
  kpiDetail: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private kpiOffServiceService: KpiOffServiceService,
    private alertService: AlertService

  ) {


  }

  ngOnInit() {
    this.showDetailByOff(this.kpiId, this.ampId);
  }
  showDetailByOff(kpiId, ampId) {
    this.loading = true;
    this.kpiDetail = [];
    this.kpiOffServiceService.getKpiOff(kpiId, ampId)
      .then((rows: any) => {
        if (rows.ok) {
          //console.log(rows.rows);
          this.kpiDetail = rows.rows;
          this.loading = false;
        } else {
          this.loading = false;
          console.log(JSON.stringify(rows.error));
        }
      })
      .catch(() => {
        this.alertService.error('Server Error');

      })



  }
}
