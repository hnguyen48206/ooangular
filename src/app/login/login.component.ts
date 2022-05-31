import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { ApiservicesService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='administrator';
  password='oo';
  isRememberPassword=true;
  isLoggingIn=false;

  constructor(private toaster: ToastrService, private router: Router, private generalService: GeneralService, private api: ApiservicesService) { }

  ngOnInit(): void {
    if(this.generalService.isLogin)
    this.router.navigate(['/home'])
  }
  async login() {
    if(!this.isLoggingIn)
    {
      this.isLoggingIn = true
      try {
        let res = await this.api.httpCall(this.api.apiLists.login, {}, {
          "username": this.username,
          "password": this.password
        }, 'post');
        this.toaster.success('', 'Đăng nhập thành công!', {
          timeOut: 2000,
        });

        console.log(res)
        localStorage.setItem('userData', JSON.stringify(res));
        if(this.isRememberPassword)
        localStorage.setItem('isRememberLogin', '1');
        else
        localStorage.setItem('isRememberLogin', '0');
  
        this.generalService.userData = res;
        this.generalService.isLogin = true;
        this.router.navigate(['/home']);
        this.getUserInfo();
      } catch (error) {
        this.toaster.error('', 'Đã xảy ra lỗi kết nối với hệ thống. Xin vui lòng thử lại.', {
          timeOut: 3000,
        });
      }
      finally{
        this.isLoggingIn = false
      }
    }
    
  
  }

  async getUserInfo()
  {
    try {
      let res = await this.api.httpCall(this.api.apiLists.getUserByID + this.username, {}, {}, 'get')
      console.log(res)
    } catch (error) {
      
    }
  }
}
