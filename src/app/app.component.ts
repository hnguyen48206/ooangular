import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private generalService: GeneralService, private router: Router) { }
  ngOnInit(): void {
    this.getSavedUserInfo();
    this.loadConfigFile();
  }
  ngAfterViewInit(): void {
    // window.moveTo(0, 0);
    // window.resizeTo(screen.availWidth, screen.availHeight)
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
      this.router.initialNavigation();
    }
  }

}
