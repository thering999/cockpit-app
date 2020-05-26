import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()
export class LookupService {

  constructor(
    @Inject('API_URL') private url: string,
    private http: Http
  ) { }

  getAlllookuptype() {
    return new Promise((resolv, reject) => {
      this.http.get(`${this.url}/lookup/type`)
        .map(res => res.json())
        .subscribe(data => {
          resolv(data);
        }, error => {
          reject(error);
        })
    })
  }

  getAlllookupstatus() {
    return new Promise((resolv, reject) => {
      this.http.get(`${this.url}/lookup/status`)
        .map(res => res.json())
        .subscribe(data => {
          resolv(data);
        }, error => {
          reject(error);
        })
    })
  }

  // เอาไว้เรียก user 555
  getAlllookupusers() {
    return new Promise((resolv, reject) => {
      this.http.get(`${this.url}/users`)
        .map(res => res.json())
        .subscribe(data => {
          resolv(data);
        }, error => {
          reject(error);
        })
    })
  }

  getAlllookupsource() {
    return new Promise((resolv, reject) => {
      this.http.get(`${this.url}/lookup/source`)
        .map(res => res.json())
        .subscribe(data => {
          resolv(data);
        }, error => {
          reject(error);
        })
    })
  }

  getAlllookuptypedata() {
    return new Promise((resolv, reject) => {
      this.http.get(`${this.url}/lookup/typedata`)
        .map(res => res.json())
        .subscribe(data => {
          resolv(data);
        }, error => {
          reject(error);
        })
    })
  }

  getAlllookupcal() {
    return new Promise((resolv, reject) => {
      this.http.get(`${this.url}/lookup/calulate`)
        .map(res => res.json())
        .subscribe(data => {
          resolv(data);
        }, error => {
          reject(error);
        })
    })
  }
}
