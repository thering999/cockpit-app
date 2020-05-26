import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()
export class AdminoutputService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }

    getAllAdminOutput(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/101/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput2(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/102/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput3(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/103/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput4(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/104/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput5(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/201/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput6(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/202/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput7(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/203/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput8(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/301/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput9(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/302/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput10(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/303/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput401(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/401/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput402(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/402/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput403(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/403/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput404(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/404/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput405(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/405/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput406(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/406/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput407(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/407/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput408(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/408/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput409(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/409/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput410(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/410/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput411(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/411/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput412(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/412/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput413(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/413/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput414(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/414/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput415(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/415/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput416(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/416/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput417(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/417/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput418(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/418/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput419(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/419/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput420(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/420/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput421(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/421/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput422(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/422/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput501(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/501/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput601(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/601/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getAllAdminOutput602(userLevel: any) {
        return new Promise((resolv, reject) => {
            // this.http.post(`${this.url}/kpi/item`, { kpi_stg_id: '101', kpi_own: 'ssj06' })
            this.http.get(`${this.url}/kpi/kpitype/602/1/${userLevel}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }

    getKpiAmp(kpi_id) {
        console.log(kpi_id);
        // console.log(kpi_stg_id);
        return new Promise((resolv, reject) => {
            this.http.post(`${this.url}/view/kpiEdit`, { kpi_id: kpi_id })
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }

    // getKpiAmp(kpi_id, kpi_stg_id) {
    //     // console.log(kpi_id);
    //     // console.log(kpi_stg_id);
    //     return new Promise((resolv, reject) => {
    //         this.http.post(`${this.url}/view/ampurEdit`, { kpi_id: kpi_id, kpi_stg_id: kpi_stg_id })
    //             .map(res => res.json())
    //             .subscribe(data => {
    //                 resolv(data);
    //             }, error => {
    //                 reject(error);
    //             })
    //     })
    // }

    getKpiProv(kpi_id, kpi_stg_id) {
        console.log(kpi_id);
        console.log(kpi_stg_id);
        return new Promise((resolv, reject) => {
            this.http.post(`${this.url}/view/`, { kpi_id: kpi_id, kpi_stg_id: kpi_stg_id })
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }

    updateKpiAmp(kpiamp) {
        // let da_baseline = kpiamp.da_baseline;
        // let da_pop = kpiamp.da_pop;
        // let da_data = kpiamp.da_data;
        // let da_rate = kpiamp.da_rate;
        // console.log(kpi_id);
        // console.log(kpi_stg_id);
        return new Promise((resolv, reject) => {
            this.http.post(`${this.url}/view/ampur`, { kpiamp: kpiamp })
                .map(res => res.json())
                .subscribe(data => {
                    resolv(data);
                }, error => {
                    reject(error);
                })
        })
    }

    edit(
        dp_prov: any,
        dp_kpi: any,
        dp_baseline: any,
        dp_pop: any,
        dp_data: any,
        dp_rate: any,
        dp_pop1: any,
        dp_data1: any,
        dp_rate1: any,
        dp_pop2: any,
        dp_data2: any,
        dp_rate2: any,
        dp_pop3: any,
        dp_data3: any,
        dp_rate3: any,
        dp_pop4: any,
        dp_data4: any,
        dp_rate4: any
    ) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.url}/kpiprov/updateKpiProv`, {
                dp_prov: dp_prov,
                dp_kpi: dp_kpi,
                dp_baseline: dp_baseline,
                dp_pop: dp_pop,
                dp_data: dp_data,
                dp_rate: dp_rate,
                dp_pop1: dp_pop1,
                dp_data1: dp_data1,
                dp_rate1: dp_rate1,
                dp_pop2: dp_pop2,
                dp_data2: dp_data2,
                dp_rate2: dp_rate2,
                dp_pop3: dp_pop3,
                dp_data3: dp_data3,
                dp_rate3: dp_rate3,
                dp_pop4: dp_pop4,
                dp_data4: dp_data4,
                dp_rate4: dp_rate4
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    save(
        dp_prov: any,
        dp_kpi: any,
        dp_pop: any,
        dp_data: any,
        dp_rate: any,
        dp_pop1: any,
        dp_data1: any,
        dp_rate1: any,
        dp_pop2: any,
        dp_data2: any,
        dp_rate2: any,
        dp_pop3: any,
        dp_data3: any,
        dp_rate3: any,
        dp_pop4: any,
        dp_data4: any,
        dp_rate4: any
    ) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/kpiprov`, {
                dp_prov: dp_prov,
                dp_kpi: dp_kpi,
                dp_pop: dp_pop,
                dp_data: dp_data,
                dp_rate: dp_rate,
                dp_pop1: dp_pop1,
                dp_data1: dp_data1,
                dp_rate1: dp_rate1,
                dp_pop2: dp_pop2,
                dp_data2: dp_data2,
                dp_rate2: dp_rate2,
                dp_pop3: dp_pop3,
                dp_data3: dp_data3,
                dp_rate3: dp_rate3,
                dp_pop4: dp_pop4,
                dp_data4: dp_data4,
                dp_rate4: dp_rate4
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    editamp(
        kpiamp : any
    ) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.url}/kpiprov/updateKpiAmp`, {
                kpiamp
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    saveamp(
    ) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/kpiamp`, {
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    // edit(adminoutput_id: any, adminoutput_stg_id: any) {
    //     return new Promise((resolve, reject) => {
    //         this.http.put(`${this.url}/kpi`, {
    //             update_id: adminoutput_id,
    //             update_data: adminoutput_stg_id
    //         })
    //             .map(res => res.json())
    //             .subscribe(data => {
    //                 resolve(data);
    //             }, error => {
    //                 reject(error);
    //             });
    //     });
    // }

    // remove(adminkpi_id: any) {
    //     return new Promise((resolve, reject) => {
    //         this.http.delete(`${this.url}/userlevel/${adminkpi_id}`)
    //         .map(res => res.json())
    //         .subscribe(data => {
    //             resolve(data);
    //         }, error => {
    //             reject(error);
    //         });
    //     });
    // }

}
