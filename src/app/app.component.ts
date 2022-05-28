import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private generalService: GeneralService, private router: Router) { }

  public loadJsFile(url) {  
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  } 

  ngOnInit(): void {
     this.loadJsFile("assets/js/vendor.min.js");  
    this.loadJsFile("assets/js/app.min.js");
    this.getSavedUserInfo();
    this.loadConfigFile();
  }
  ngAfterViewInit(): void {
    // window.moveTo(0, 0);
    // window.resizeTo(screen.availWidth, screen.availHeight)   
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
