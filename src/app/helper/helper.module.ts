import { MonthToThPipe } from './month-to-th.pipe';

import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToThaiDatePipe } from './to-thai-date.pipe';
import { NumberOnlyDirective } from './number-only.directive';
import { ConvertTimestampPipe } from './convert-timestamp.pipe';
import { RoundPipe } from './round.pipe';

import { HtmlPreviewComponent } from './html-preview/html-preview.component';
import { NumberWithoutDotDirective } from 'app/helper/number-without-dot.directive';
import { ToEngDatePipe } from 'app/helper/to-eng-date.pipe';
import { MonthDateperiodPipe } from './month-dateperiod.pipe';
import { YearThaiPipe } from './year-thai.pipe';
import { KeysPipe} from './key-object.pipe';
import { FilterObjectPipe } from './filter-object.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToThaiDatePipe,
    ToEngDatePipe,
    NumberOnlyDirective,
    ConvertTimestampPipe,
    RoundPipe,
    PdfViewerComponent,
    HtmlPreviewComponent,
    NumberWithoutDotDirective,
    MonthToThPipe,
    MonthDateperiodPipe,
    YearThaiPipe,
    KeysPipe,
    FilterObjectPipe
  ],
  exports: [
    ToThaiDatePipe,
    ToEngDatePipe,
    NumberOnlyDirective,
    ConvertTimestampPipe,
    RoundPipe,
    PdfViewerComponent,
    HtmlPreviewComponent,
    NumberWithoutDotDirective,
    MonthToThPipe,
    MonthDateperiodPipe,
    YearThaiPipe,
    KeysPipe,
    FilterObjectPipe
  ]
})
export class HelperModule { }
