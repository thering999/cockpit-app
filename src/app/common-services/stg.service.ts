import { Injectable, Inject, EventEmitter } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class StgService {
    list1Event: EventEmitter<any> = new EventEmitter();

    constructor(@Inject("API_URL") private url: string, private http: Http) { }
    getStg() {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.url}/stglist`)
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

    getStgOne() {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.url}/stglist/1`)
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

    getStgTwo() {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.url}/stglist/2`)
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

    getStgThree() {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.url}/stglist/3`)
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
    getStgFour() {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.url}/stglist/4`)
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
    getStgFive() {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.url}/stglist/5`)
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
    getStgSix() {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.url}/stglist/6`)
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
    getAmphurList(prov_id) {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.url}/dep/ampur/`)
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
    getNameStg(stgid) {
        //console.log(stgid);
        return new Promise((resolve, reject) => {
            let url = `${this.url}/stglist`;
            let headers = new Headers({ "Content-Type": "application/json" });
            let options = new RequestOptions({ headers: headers });
            let body = { stg_id: stgid };
            this.http
                .post(url, body, options)
                .map(res => res.json())
                .subscribe(
                    data => {
                        resolve(data);
                        //console.log(data);
                    },
                    error => {
                        reject("Connection error");
                    }
                );
        });
    }
    getNameStgGrp(stgGrpid) {
        //console.log(stgGrpid);
        return new Promise((resolve, reject) => {
            let url = `${this.url}/stglist`;
            let headers = new Headers({ "Content-Type": "application/json" });
            let options = new RequestOptions({ headers: headers });
            let body = { stg_grp_id: stgGrpid };
            this.http
                .post(url, body, options)
                .map(res => res.json())
                .subscribe(
                    data => {
                        resolve(data);
                        //console.log(data);
                    },
                    error => {
                        reject("Connection error");
                    }
                );
        });
    }
}
