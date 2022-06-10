import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  appConfig
  isLogin = false;
  userData
  currentUser
  allUsers
  currentLanguage = {
    "Code":"VN",
    "Name": "Tiếng Việt",
    "URL": 'assets/images/flags/vietnam.png'
  }
  constructor(private router: Router) { }
  setDefaultAvatar(e)
  {
    e.target.src = 'assets/imgs/defaultAvatar.png'
  }
  imageLinkSetup(imgName)
  {
    return this.appConfig.API_BASE_URL + '/' + imgName;
  }
  logout()
  {
    this.isLogin=false;
    this.removeTempData();
    this.removeStoragedata();
    this.router.navigate(['/home'], {queryParams: {clearHistory: true }});
  }

  checkIfUserHasRightToThisRoute(routeToCheck)
  {
    console.log(routeToCheck)
    return true;
  }
  removeStoragedata()
  {
    localStorage.removeItem('userData');
  }
  removeTempData()
  {
    this.userData = null;
    this.currentUser = null;
    this.allUsers = null
  }

}
