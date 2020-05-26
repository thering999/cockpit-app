import { Component, OnInit, Input,ViewChild,AfterViewInit ,OnChanges,ElementRef,Directive, Output,  EventEmitter} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { TestService } from './test.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
//import { Chart } from 'angular-highcharts';
//import { Chart } from '../../../node_modules/@types/highcharts';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
@Directive({
  selector: '[ngInit]'
})
export class TestComponent implements OnInit {
  chart: any;


  constructor(
    private http: Http,
    private testService: TestService,
    private eleRef: ElementRef,
  

  ) { }

  ngOnInit() {
   // this.bb();
  }
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
  bb() {
  }
 

}
