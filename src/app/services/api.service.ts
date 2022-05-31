import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from './general.service';
import { timeout, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  apiLists = {
    login: '/api/Users/token',
    getUserByID: '/api/Users/GetUserByUserId/',
    getAllUsers: '/api/Users/GetAllUsers'
  }

  constructor(private httpClient: HttpClient, private router: Router, private generalService: GeneralService) {
  }
  defaultTimeout = 10000
  httpCall(url, header, body, method) {
    url = this.generalService.appConfig.API_BASE_URL + url;
    if (this.generalService.userData != null) {
      header['Authorization'] = 'Bearer ' + this.generalService.userData.token;
    }
    return new Promise((resolve, reject) => {
      //use angular http        
      if (method == 'get') {
        this.httpClient.get(url, { headers: header, params: body })
          .pipe(
            timeout(this.defaultTimeout),
            catchError(e => {
              return Promise.reject('TimeOut');;
            })
          )
          .subscribe(res => {
            console.log(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
      }
      else if (method == 'post') {
        this.httpClient.post(url, body, { headers: header })
          .pipe(
            timeout(this.defaultTimeout),
            catchError(e => {
              return Promise.reject('TimeOut');;
            })
          )
          .subscribe(res => {
            console.log(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
      }
      else if (method == 'patch') {
        this.httpClient.patch(url, body, { headers: header })
          .pipe(
            timeout(this.defaultTimeout),
            catchError(e => {
              return Promise.reject('TimeOut');;
            })
          )
          .subscribe(res => {
            console.log(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
      }
      else if (method == 'put') {
        this.httpClient.put(url, body, { headers: header })
          .pipe(
            timeout(this.defaultTimeout),
            catchError(e => {
              return Promise.reject('TimeOut');;
            })
          )
          .subscribe(res => {
            console.log(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
      }
      else if (method == 'delete') {
        this.httpClient.delete(url, { headers: header })
          .pipe(
            timeout(this.defaultTimeout),
            catchError(e => {
              return Promise.reject('TimeOut');;
            })
          )
          .subscribe(res => {
            console.log(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
      }
    });
  }


  async initDataFromServer()
  {
    this.getUserInfo();
    this.getAllUsers(null, null);
  }

  async getUserInfo() {
    try {
      let res = await this.httpCall(this.apiLists.getUserByID + this.generalService.userData.userID, {}, {}, 'get')
      let result = <any>res
      if (result.succeeded) {
        this.generalService.currentUser = result.data;
      }
    } catch (error) {

    }
  }

  async getAllUsers(pageNum, pageSize) {
    try {
      if (pageNum == null || pageSize == null) {
        pageNum = 1; pageSize = 1000;
      }
      let res = await this.httpCall(this.apiLists.getAllUsers, {}, {
        PageNumber: pageNum, PageSize: pageSize
      }, 'get')
      let result = <any>res
      if (result.succeeded) {
        this.generalService.allUsers = result.data;
      }
    } catch (error) {

    }
  }
}
