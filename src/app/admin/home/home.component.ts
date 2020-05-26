import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, OnInit, Component, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import { AlertService } from '../../alert.service';
import swal from 'sweetalert2';

import { UserNameService } from '../admin-services/usernames.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [
        AlertService,
        UserNameService
    ],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    allUsername: any = [];
    allLevel: any = [];

    username: any;
    password: any;
    title: any;
    fname: any;
    lname: any;
    office: any;
    post: any;
    status: any;
    level: any;

    isupdate: boolean = false;
    open: Boolean = false;

    constructor(
        private userNameService: UserNameService,
        private alertService: AlertService,

    ) { }

    ngOnInit() {
        this.showUsername();
        this.showLevel();
    }

    Open() {
        this.open = true;
        this.username = null;
        this.password = null;
        this.title = null;
        this.fname = null;
        this.lname = null;
        this.office = null;
        this.post = null;
        this.status = null;
        this.level = null;
    }

    showUsername() {
        this.allUsername = [];
        this.userNameService.getUserName()
            .then((results: any) => {
                if (results.rows.length > 0) {
                    if (results.ok) {
                        this.allUsername = results.rows;
                        // console.log(this.allUsername);
                    } else {
                        console.log(JSON.stringify(results.error));
                    }
                } else {
                    console.log("ไม่มีข้อมูล");
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }

    showLevel() {
        this.allLevel = [];
        this.userNameService.getLevel()
            .then((results: any) => {
                if (results.rows.length > 0) {
                    if (results.ok) {
                        this.allLevel = results.rows;
                        // console.log(this.allLevel);
                    } else {
                        console.log(JSON.stringify(results.error));
                    }
                } else {
                    console.log("ไม่มีข้อมูล");
                }
            })
            .catch(() => {
                console.log("Server Error");
            })
    }

    addData() {
        this.open = false;

        if (this.username && this.password && this.fname) {
            this.userNameService.save(
                this.username,
                this.password,
                this.title,
                this.fname,
                this.lname,
                this.office,
                this.post,
                this.status,
                this.level
            )
                .then((results: any) => {
                    if (results.ok) {
                        console.log("เพิ่มข้อมูลสำเร็จ");
                        this.showUsername();
                        this.username = null;
                        this.password = null;
                        this.title = null;
                        this.fname = null;
                        this.lname = null;
                        this.office = null;
                        this.post = null;
                        this.status = null;
                        this.level = null;
                    } else {
                        console.log("เพิ่มข้อมูลไม่สำเร็จ");
                    }
                }).catch(() => {
                    console.log("SERVER ERROR");
                })

        } else {
            console.log("การกรอกข้อมูล");
        }
    }

    editData(x) {
        // console.log(x);

        this.username = x.username;
        this.password = x.password;
        this.title = x.title;
        this.fname = x.fname;
        this.lname = x.lname;
        this.office = x.office;
        this.post = x.post;
        this.status = x.status;
        this.level = x.level;

        this.isupdate = true;
        this.open = true;
    }

    updateData() {
        this.open = false;
        if (this.username && this.fname && this.password) {
            this.userNameService.edit(
                this.username,
                this.password,
                this.title,
                this.fname,
                this.lname,
                this.office,
                this.post,
                this.status,
                this.level
            )
                .then((results: any) => {
                    if (results.ok) {
                        console.log("แก้ไขข้อมูลเรียบร้อย");
                        this.showUsername();
                        this.username = null;
                        this.password = null;
                        this.title = null;
                        this.fname = null;
                        this.lname = null;
                        this.office = null;
                        this.post = null;
                        this.status = null;
                        this.level = null;

                    } else {
                        console.log("แก้ไขข้อมูลไม่สำเร็จ");
                    }
                }).catch(() => {
                    console.log("SERVER ERROR");
                })

        } else {
            console.log("ข้อมูลไม่ครบ");
        }
    }

    save() {
        if (this.isupdate) {
            this.updateData();

        } else {
            this.addData();
        }
    }

    delete(x) {

        // console.log(x);
        this.userNameService.remove(x.username)
            .then((results: any) => {
                if (results.ok) {
                    this.showUsername();
                } else {
                    console.log(results.error);
                }
            }).catch(() => {
                console.log("SERVER ERROR");
            })
    }

}
