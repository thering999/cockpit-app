![Clarity](logo.png)

How to Install
============

```bash
git clone git@gitlab.com:cockpitubon/cockpit-app.git
cp cockpit-app
npm install
```

##### Start Project
```bash
npm start
```

Git Trick
----------------------------------

#### ก่อนจะทำการสั่ง Git Pull โปรเจคลงมา จะต้องสั่ง

```bash
git add .
git commit -m "ทำอะไร กับ code ไปบ้าง"
```

ก่อนเสมอ แล้วค่อยสั่ง

```bash
git pull
```


#### คำสั่ง Angular CLI เบื้องต้น
```bash
# สร้างหน้าหรือ Componet ขึ้นมาใหม่
ng g component my-new-component

# คำสั่งสร้าง directive ขึ้นมาใหม่ (หรือใช้แบบที่พาทำก็ได้ จะได้เอาไปไว้รวมกันได้)
ng g directive my-new-directive

# สงสัยอะไร สั่ง
ng help
```


#### เป็นไปได้ ก่อนจะ push ขึ้น git ใช้คำสั่งพวกนี้ test ดูก่อนว่า code ที่เราเขียน Error ไหม

```bash
# running unit tests
ng test

# dev build
ng build

# prod build
ng build --prod


# test build
npm run build
```


#### โครงสร้างพื้นฐานของ Angular Clarity UI
```
.
├── README.md

├── karma.conf.js              <- configuration of the test runner
├── package.json               <- dependencies of the project
├── protractor.config.js       <- e2e tests configuration
├── src/                       <- source code of the application
│   ├── app/
│   │   └── component/
│   │       └── <component>.component.html
│   │       └── <component>.component.scss
│   │       └── <component>.component.spec.ts
│   │       └── <component>.component.ts
│   │   └── app.component.html
│   │   └── app.component.scss
│   │   └── app.component.ts
│   │   └── app.e2e-spec.js    <- sample e2e spec file
│   │   └── app.module.ts
│   │   └── app.routing.ts
│   │   └── main.ts            <- boostrap file for the angular app
│   └── index.html
├── angular-cli.json           <- configuration of the angular-cli
├── tsconfig.json              <- configuration of the typescript project
├── tslint.json                <- sample configuration file for tslint
└── yarn.lock
```

## License

สำนักงานสาธารณสุขจังหวัดอุบลราชธานี
