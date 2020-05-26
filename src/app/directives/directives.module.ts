import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { DataTablesModule } from 'angular-datatables';
import { SimplePdfViewerModule } from './pdf_viewer_directive/libs/simple-pdf-viewer/src/simplePdfViewer.module';
import { SafeUrlPipe } from './pdf_viewer_directive/app.safeurl';
import { ViewerComponent } from './pdf_viewer_directive/app.viewer';

import { KpiProvDirectiveComponent } from './kpi_prov_directive/kpi_prov_directive.component';
import { KpiAmpurDirectiveComponent } from './kpi_ampur_directive/kpi_ampur_directive.component';
import { KpiProvDetailAmpurDirectiveComponent } from './kpi-prov-detail-ampur-directive/kpi-prov-detail-ampur-directive.component';
import { IndivDirectiveComponent } from './indiv-directive/indiv-directive.component';
import { ModalFileUploadComponent } from './modal-file-upload/modal-file-upload.component';
import { AppPdfComponent } from './pdf_viewer_directive/app.component';

import { BrowserModule } from '@angular/platform-browser';
// import Modules
import { HelperModule } from '../helper/helper.module';
import { MyDatePickerTHModule } from 'mydatepicker-th';

// import service
import { YearThaiPipe } from 'app/helper/year-thai.pipe';
import { MonthToThPipe } from 'app/helper/month-to-th.pipe';
import { MonthDateperiodPipe } from 'app/helper/month-dateperiod.pipe';
import { KeysPipe } from 'app/helper/key-object.pipe';
import { Globals } from '../common-services/global.service';
import { KpiAmpurDetailOffDirectiveComponent } from './kpi-ampur-detail-off-directive/kpi-ampur-detail-off-directive.component';
import { KpiProvQtDirectiveComponent } from './kpi_prov_qt_directive/kpi_prov_qt_directive.component';
import { KpiAmpurQtDirectiveComponent } from './kpi_ampur_qt_directive/kpi_ampur_qt_directive.component';





@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        FormsModule,
        HelperModule,
        MyDatePickerTHModule,
        Ng2HighchartsModule,
        BrowserModule,
        DataTablesModule,
        SimplePdfViewerModule
    ],
    declarations: [
        KpiProvDirectiveComponent,
        KpiAmpurDirectiveComponent,
        KpiProvDetailAmpurDirectiveComponent,
        IndivDirectiveComponent,
        ModalFileUploadComponent,
        KpiAmpurDetailOffDirectiveComponent,
        KpiProvQtDirectiveComponent,
        KpiAmpurQtDirectiveComponent,
        AppPdfComponent,
        ViewerComponent, SafeUrlPipe
    ],
    providers: [
        YearThaiPipe,
        MonthToThPipe,
        MonthDateperiodPipe,
        KeysPipe,
        Globals,
        // SafeUrlPipe
    ],
    exports: [
        KpiProvDirectiveComponent,
        KpiAmpurDirectiveComponent,
        IndivDirectiveComponent,
        ModalFileUploadComponent,        
        KpiAmpurDetailOffDirectiveComponent,
        KpiProvQtDirectiveComponent,
        KpiAmpurQtDirectiveComponent,
        AppPdfComponent,ViewerComponent

    ]
})
export class DirectivesModule { }
