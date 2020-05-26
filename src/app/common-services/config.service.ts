import { Injectable, Inject, EventEmitter } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ConfigService {

  constructor( @Inject("API_URL") private url: string, private http: Http) { }
    readConfig() {
        //console.log(this.url);
    return new Promise((resolve, reject) => {
      this.http
          .get(`${this.url}/config/`)
          .map(res => res.json())
          .subscribe(
              data => {
                  resolve(data);
              },
              error => {
                  reject(error);
              }
          );
  });
  }

}
