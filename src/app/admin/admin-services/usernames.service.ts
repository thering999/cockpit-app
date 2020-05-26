import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()
export class UserNameService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }


    getUserName() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}/users`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    getLevel() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}/userlevel`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    save(
        username: any,
        password: any,
        title: any,
        fname: any,
        lname: any,
        office: any,
        post: any,
        status: any,
        level: any
    ) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/users`, {
                username: username,
                password: password,
                title: title,
                fname: fname,
                lname: lname,
                office: office,
                post: post,
                status: status,
                level: level
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    edit(
        username: any,
        password: any,
        title: any,
        fname: any,
        lname: any,
        office: any,
        post: any,
        status: any,
        level: any
    ) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.url}/users`, {
                username: username,
                password: password,
                title: title,
                fname: fname,
                lname: lname,
                office: office,
                post: post,
                status: status,
                level: level
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    remove(username: any) {
        return new Promise((resolve, reject) => {
            this.http.delete(`${this.url}/users/${username}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
}
