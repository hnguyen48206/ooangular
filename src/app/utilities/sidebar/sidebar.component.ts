import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public generalService: GeneralService, private router:Router) { }

  ngOnInit() {
  }

  routeNavigator(route)
  {
    this.router.navigate([route]);
  }
}
