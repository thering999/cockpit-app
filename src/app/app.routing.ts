import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { KpiComponent } from './kpi/kpi.component';
import { KpiAmpurComponent } from './kpi_ampur/kpi_ampur.component';
import { LoginComponent } from './login/login.component';
import { PdfViewerComponent } from './helper/pdf-viewer/pdf-viewer.component';

import { TestComponent } from './test/test.component';
// import { AppPdfComponent } from './directives/pdf_viewer_directive/app.component';

export const ROUTES: Routes = [
    // { path: '', redirectTo: 'cockpit', pathMatch: 'full' },
    { path: '', redirectTo: 'cockpit/kpi', pathMatch: 'full' },
    // { path: 'cockpit/kpi',redirectTo: 'cockpit/kpi/101/1', pathMatch: 'full'},    
    { path: 'login', component: LoginComponent },
    {
        path: 'cockpit',
        component: LayoutComponent,
        children: [

            { path: 'kpi', component: KpiComponent },
            { path: 'kpi/:stg_id/:stg_grp_id', component: KpiComponent },
            { path: 'kpi/:stg_id/:stg_grp_id/:kpi_id', component: KpiComponent },
            { path: 'kpiampur/:stg_id/:stg_grp_id/:amp_id', component: KpiAmpurComponent },

            //{ path: 'kpi', component: KpiComponent },
            // { path: 'login', component: LoginComponent },

        ]
    },
    { path: 'pdf/:filename', component: PdfViewerComponent },
    // { path: 'app-pdf', component: AppPdfComponent },
    // { path: 'test', component: TestComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
