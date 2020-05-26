import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from "clarity-angular";
import { CommonModule } from '@angular/common';

import { DirectivesModule } from './../directives/directives.module';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutadmComponent } from './layoutadm/layoutadm.component';
import { HomeComponent } from './home/home.component';

import { AdminkpiComponent } from './adminkpi/adminkpi.component';
import { AdminstrategyComponent } from './adminstrategy/adminstrategy.component';
import { AdminoutputComponent } from './adminoutput/adminoutput.component';
// import { Adminoutput2Component } from './adminoutput2/adminoutput2.component';
import { AdminmainkpiComponent } from './adminmainkpi/adminmainkpi.component';

import { AdminmainkpiService } from "./admin-services/adminmainkpi.service";
import { AdminkpiService } from './admin-services/adminkpi.service';
import { AdminoutputService } from './admin-services/adminoutput.service';
// import { Adminoutput2Service } from './admin-services/adminoutput2.service';
import { AdmstrategyService } from './admin-services/admstrategy.service';

// import Modules
// import { DirectivesModule } from '../directives/directives.module';
// import { HelperModule } from '../helper/helper.module';


import { YearThaiPipe } from 'app/helper/year-thai.pipe';
import { MonthToThPipe } from 'app/helper/month-to-th.pipe';
import { MonthDateperiodPipe } from 'app/helper/month-dateperiod.pipe';
import { MyDatePickerTHModule } from 'mydatepicker-th';

// import Uploading Service
import { UploadingService } from '../common-services/uploading.service';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        ClarityModule,
        AdminRoutingModule,
        // HelperModule,
        MyDatePickerTHModule,
        DirectivesModule

    ],
    declarations: [
        LayoutadmComponent,
        HomeComponent,
        AdminoutputComponent,
        // Adminoutput2Component,
        AdminmainkpiComponent,
        AdminstrategyComponent,
        AdminkpiComponent,

    ],
    providers: [
        // { provide: 'API_URL', useValue: environment.apiUrl },
        MonthToThPipe,
        MonthDateperiodPipe,
        YearThaiPipe,
        AdminkpiService,
        AdminoutputService,
        // Adminoutput2Service,
        AdminmainkpiService,
        AdmstrategyService,
        UploadingService
    ]

})
export class AdminModule { }
