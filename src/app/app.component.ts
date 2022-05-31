import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from './services/api.service';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  externalJS = [
    "assets/js/vendor.min.js",
    "assets/js/app.min.js"
  ];

  constructor(public generalService: GeneralService, private router: Router, private api:ApiservicesService) { }

  public loadJsFile(url) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit(): void {
    for (let i = 0; i < this.externalJS.length; ++i) {
      this.loadJsFile(this.externalJS[i]);
    }
    this.loadConfigFile();
  }
  ngAfterViewInit(): void {
  }

  loadConfigFile() {
    try {
      const req = new XMLHttpRequest();
      req.open('GET', `assets/data/config.json`);
      req.onload = () => {
        let config = JSON.parse(req.response);
        console.log('Config from file: ', config);
        this.generalService.appConfig = config;
        this.getSavedUserInfo();
      };
      req.send();
    } catch (error) {
      console.log('Get config Failed')
    }

  }

  async getSavedUserInfo() {
    let userData =  localStorage.getItem('userData');
    let isRememberLogin =  localStorage.getItem('isRememberLogin');

    try {
      if (userData!=null && isRememberLogin!=null && isRememberLogin=='1') {
        this.generalService.userData = JSON.parse(userData);
        this.generalService.isLogin = true;
        await this.autoLogin();
      }
    } catch (error) {
      console.log('Ko có thông tin local của user')
    }
    finally {
      this.router.initialNavigation();
    }
  }

  async autoLogin()
  {
    try {

      let res = await this.api.httpCall(this.api.apiLists.login, {}, {
        "username": this.generalService.userData.userName,
        "password": this.generalService.userData.password
      }, 'post');
  
      console.log(res)
      let result = <any>res
      result['password'] = this.generalService.userData.password
      localStorage.setItem('userData', JSON.stringify(result));
    
      this.generalService.userData = result;
      this.generalService.isLogin = true;
      this.api.initDataFromServer();
    } catch (error) {
      console.log(error)
    }
  }

}
