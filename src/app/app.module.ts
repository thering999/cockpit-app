// system
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { environment } from "environments/environment.prod";
import { Ng2HighchartsModule } from 'ng2-highcharts';


require('highcharts/highcharts-more'); // for create gauge  chart
require('jsonfile')
require('util');
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';


// owner  user//////////////////////////
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { LayoutComponent } from './layout/layout.component';
import { TestComponent } from './test/test.component';
import { KpiComponent } from './kpi/kpi.component';
import { KpiAmpurComponent } from './kpi_ampur/kpi_ampur.component';


// common-services
import { StgService } from './common-services/stg.service';
import { StggroupService } from './common-services/stggroup.service';
import { KpiProvService } from './common-services/kpi-prov.service';
import { KpiAmpurService } from './common-services/kpi-ampur.service'
import { AlertService } from './alert.service';
import { AdminkpiService } from './admin/admin-services/adminkpi.service';
import { AdminoutputService } from './admin/admin-services/adminoutput.service';
import { Adminoutput2Service } from './admin/admin-services/adminoutput2.service';
import { AdmstrategyService } from './admin/admin-services/admstrategy.service';
import { AdminmainkpiService } from "./admin/admin-services/adminmainkpi.service";
import { LookupService } from "./admin/admin-services/lookup.service";
import { IndivService } from './common-services/indiv.service';
import { KpiOffServiceService } from './common-services/kpi-off-service.service';
import { KpiQtService } from './common-services/kpi-qt.service';
import { ConfigService } from './common-services/config.service';

import { Globals } from './common-services/global.service';
import { HerbsService } from './test/json.service';
import { TestService } from './test/test.service';
//  import { AppPdfComponent } from './directives/pdf_viewer_directive/app.component';


// import Modules
import { DirectivesModule } from './directives/directives.module';
import { HelperModule } from './helper/helper.module';



import { YearThaiPipe } from 'app/helper/year-thai.pipe';
import { MonthToThPipe } from 'app/helper/month-to-th.pipe';
import { MonthDateperiodPipe } from 'app/helper/month-dateperiod.pipe';
import { MyDatePickerTHModule } from 'mydatepicker-th';
import { KeysPipe } from 'app/helper/key-object.pipe';
import { FilterObjectPipe } from 'app/helper/filter-object.pipe';

// import Client And Admin
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';

// import upload service
import { UploadingService } from './common-services/uploading.service';
import { SearchComponent } from './search/search.component';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LayoutComponent,
        KpiComponent,
        LoginComponent,
        KpiAmpurComponent,
        LoginComponent,
        // AppPdfComponent,
        TestComponent,       
        SearchComponent


    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        AdminModule,
        ClarityModule,
        DirectivesModule,
        HelperModule,
        MyDatePickerTHModule,
        Ng2HighchartsModule,
        DataTablesModule,
        ROUTING,
        LoadingBarRouterModule,
        LoadingBarModule.forRoot(),





    ],
    providers: [
        { provide: 'API_URL', useValue: environment.apiUrl },
        { provide: 'DOC_URL', useValue: environment.apiUrl },
        { provide: 'KPI_PREFIX', useValue: environment.kpiPrefix },
        // { provide: 'prov_code', useValue: environment.prov_code },
        MonthToThPipe,
        MonthDateperiodPipe,
        YearThaiPipe,
        KeysPipe,
        FilterObjectPipe,
        StgService,
        StggroupService,
        KpiProvService,
        KpiAmpurService,
        AlertService,
        AdminkpiService,
        AdminoutputService,
        Adminoutput2Service,
        AdminmainkpiService,
        AdmstrategyService,
        IndivService,
        KpiOffServiceService,
        Globals,
        LookupService,
        UploadingService,
        ConfigService,
        HerbsService,
        KpiQtService,
        TestService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
