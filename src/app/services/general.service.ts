import { ElementRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private router: Router, private toaster:ToastrService) { }
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
  showErrorToast(errorCode, message)
  {
    // 0 là error, 1 là success, 2 là warning
    if(errorCode == 0)
    this.toaster.error('', message, {
      timeOut: 3000,
    });
    else if(errorCode == 1)
    this.toaster.success('', message, {
      timeOut: 3000,
    });
    else if(errorCode == 2)
    this.toaster.warning('', message, {
      timeOut: 3000,
    });
  }
  emailValidator(email)
  {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
