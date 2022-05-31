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
  constructor(private router: Router) { }

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
