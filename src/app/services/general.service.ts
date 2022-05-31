import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  appConfig
  isLogin = false;
  userData
  constructor(private router: Router) { }

  logout()
  {
    this.isLogin=false;
    localStorage.removeItem('userData');
    this.userData = null;
    this.router.navigate(['/home'], {queryParams: {clearHistory: true }});
  }

  checkIfUserHasRightToThisRoute(routeToCheck)
  {
    console.log(routeToCheck)
    return true;
  }
  
}
