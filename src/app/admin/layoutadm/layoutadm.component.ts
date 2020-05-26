import { Component, OnInit } from '@angular/core';
import { StgService } from '../../common-services/stg.service';
import { StggroupService } from '../../common-services/stggroup.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layoutadm',
    templateUrl: './layoutadm.component.html',
    styleUrls: ['./layoutadm.component.scss']
})
export class LayoutadmComponent implements OnInit {
    userLevel: any;
    hospcode: any;
    userFname: any;
    getStggroup: any = [];
    getStgOne: any = [];
    getStgTwo: any = [];
    getStgThree: any = [];
    getStgFour: any = [];
    getStgFive: any = [];
    getStgSix: any = [];
    stg_group_One: any;
    stg_group_Two: any;
    stg_group_Three: any;
    stg_group_Four: any;
    stg_group_Five: any;
    stg_group_Six: any;
    constructor(
        private stgService: StgService,
        private stgGroupService: StggroupService,
        private router: Router

    ) { }

    ngOnInit() {
        this.logLogin()

    }


    logLogin() {
        if (sessionStorage.userLevel != null) {
            // console.log('login Success!');
            this.userLevel = sessionStorage.userLevel;
            this.hospcode = sessionStorage.hospcode;
            this.userFname = sessionStorage.userFname;
            // this.user = rows.token; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
            // console.log(this.userFname);

        } else {
            this.router.navigate(['login']); // ส่ง Routes ไป client/home
            // console.log('No Token Success!');
        }

    }

    logLoOut() {
        // console.log('logout Success!');
        sessionStorage.removeItem('userFname');
        sessionStorage.removeItem('hospcode');
        sessionStorage.removeItem('userLevel');
        // location.reload();
        this.router.navigate(['login']); // ส่ง Routes ไป client/home

    }

}
