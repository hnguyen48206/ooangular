import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { ApiservicesService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='giamdoc';
  password='oo';

  constructor(private router: Router, private generalService: GeneralService, private api: ApiservicesService) { }

  ngOnInit(): void {
  }
  async login() {
    this.api.httpCall(this.api.apiLists.login, {}, {
      "username": "string",
      "password": "string"
    }, 'post').then(res=>{
      localStorage.setItem('userData', JSON.stringify({}));
      this.generalService.isLogin = true;
      this.router.navigate(['/home']);
    })
    .catch(err=>{

    })
   
  }
}
