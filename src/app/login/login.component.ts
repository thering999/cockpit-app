import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import { LoginUserService } from '../common-services/loginuser.service';
import { AlertService } from '../alert.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginUserService],
    styles: ['.error {color:red;}'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    //  member: any[] = [];
    errorMessage: string;
    status: any[] = [];
    users: any[] = [];
    mode = 'Promise';
    username: any;
    password: any;
    adm_status: any;

    prov_code: any;
    prov_name: any;
    year: any;

    constructor(
        private router: Router,
        private loginUserService: LoginUserService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.prov_code = sessionStorage.prov_code;
        this.prov_name = sessionStorage.prov_name;
        this.year = sessionStorage.year;
    }
    Login() {
        this.users = [];
        this.loginUserService.Login(this.username, this.password)
            .then((result: any) => {
                if (result.ok) {
                    this.users = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    console.log('ono');
                    console.log(this.users);
                    // console.log(this.users[0].level);
                    sessionStorage.setItem('username', this.users[0].username);
                    sessionStorage.setItem('hospcode', this.users[0].office);
                    sessionStorage.setItem('userFname', this.users[0].fname);
                    sessionStorage.setItem('userLevel', this.users[0].level);
                    console.log(sessionStorage.userLevel);
                    console.log(sessionStorage.userFname);

                    if (this.users[0].level === "4" || this.users[0].level === "3") {
                        if (this.users[0].level === "4") {
                            this.router.navigate(['admin/adminkpi']); // ส่ง Routes ไป admin/home
                        } else {
                            this.router.navigate(['admin/adminoutput']); // ส่ง Routes ไป admin/home
                        }

                    } else {
                        this.router.navigate(['cockpit/kpi/1/1']); // ส่ง Routes ไป client/home
                    }

                }
            }).catch(error => {
                console.log(error);
                console.log("Username Or Password Error")
                this.alertService.error("ชื่อผู้ใช้งาน หรือ รหัสผ่านไม่ถูกต้อง");
                this.username = null;
                this.password = null;
            })
    }

}
