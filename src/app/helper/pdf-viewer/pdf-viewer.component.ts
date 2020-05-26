import { Component, OnInit, Input } from '@angular/core';
import * as PDFObject from 'pdfobject';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

// '<div id="pdf-viewer">pdf<iframe src="http://localhost:4200/pdf/M4#view=fitH" width="700"  height="880"></iframe><div>'
@Component({
  selector: 'wm-pdf-viewer',
  template: '<div id="pdf-viewer"><div>',
})
export class PdfViewerComponent implements OnInit {
   @Input('options') options: any;
  @Input('filename') filename: any;
  /*options: any = {
    pdfOpenParams: {
      view: 'Fit',
      scrollbars: '0',
      toolbar: '0',
      statusbar: '0',
      navpanes: '0'
    }
  };*/


  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    /*this.route.params.subscribe(params => {
      this.filename = params['filename'];
      console.log(this.filename);
    });*/

  }

  ngOnInit() {
    /*this.options = {
      pdfOpenParams: { toolbar: '1' },
      height: "100%"
    };*/
    // this.showPdf('https://pdfobject.com/pdf/sample-3pp.pdf');
    //PDFObject.embed('https://pdfobject.com/pdf/sample-3pp.pdf', "#pdf-viewer", this.options);
  }

  showPdf(url: string) {
    console.log("in this show pdf");
    PDFObject.embed(url, "#pdf-viewer", this.options);
  }

}
