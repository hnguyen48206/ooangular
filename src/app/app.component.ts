import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private generalService: GeneralService, private router: Router) { }

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
    this.getSavedUserInfo();
    this.loadConfigFile();
  }
  ngAfterViewInit(): void {
     this.router.initialNavigation();
  }

  loadConfigFile() {
    try {
      const req = new XMLHttpRequest();
      req.open('GET', `assets/data/config.json`);
      req.onload = () => {
        let config = JSON.parse(req.response);
        console.log('Config from file: ', config);
        this.generalService.appConfig = config;
      };
      req.send();
    } catch (error) {
      console.log('Get config Failed')
    }
  }

  async getSavedUserInfo() {
    let userData = await localStorage.getItem('userData');
    try {
      if (userData) {
        this.generalService.isLogin = true;
      }
    } catch (error) {
      console.log('Ko có thông tin local của user')
    }
    finally {
    }
  }

}
