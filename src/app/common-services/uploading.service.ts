import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { AlertService } from '../alert.service';

import 'rxjs/add/operator/map';

@Injectable()
export class UploadingService {
  token: string;

  constructor(
    @Inject('API_URL') private url: string,
    private http: Http
  ) {
    this.token = sessionStorage.getItem('token');
  }

  makeFileRequest(documentCode: string, files: Array<File>, comment: string = null) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        formData.append("files[]", files[i], files[i].name);
      }
      formData.append('document_code', documentCode);
      formData.append("token", this.token);
      formData.append('comment', comment);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };

      const url = `${this.url}/uploads`;
      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }

  uploadHisTransaction(files: File) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append("file", files, files.name);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };

      const url = `${this.url}/his-transaction/upload?token=${this.token}`;
      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }

  // =============== document service =============== //
  async getFiles(documentCode) {
    const res: any = await this.http.get(`${this.url}/uploads/info/${documentCode}`).toPromise();
    return res.json();
  }

  async removeFile(documentId) {
    const res: any = await this.http.delete(`${this.url}/uploads/${documentId}`).toPromise();
    return res.json();
  }

}
