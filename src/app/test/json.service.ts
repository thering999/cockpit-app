import { Http, Headers, RequestOptions,Response } from '@angular/http';

  import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


  @Injectable()
  export class HerbsService {
    private _url= 'assets/config/data.json';
    constructor(private _http: Http) { }
    

 
    getHerbs() {
      return new Promise((resolve, reject) => {
          this._http
              .get(`${this._url}`)
              .map(res => res.json())
              .subscribe(
                  data => {
                    resolve(data);
                    console.log(data);
                  },
                  error => {
                      reject(error);
                  }
              );
      });
    }
    readConfig() {
      return new Promise((resolve, reject) => {
        this._http
            .get(`${this._url}/config`)
            .map(res => res.json())
            .subscribe(
                data => {
                  resolve(data);
                  console.log(data);
                },
                error => {
                    reject(error);
                }
            );
    });
    }
  }
