import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/api.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  currentTab = 'assigned'
  currentAssignedTask
  currentForwardedTask
  currentWatchableTask


  currentPageNumber = 1;
  currentPageSize = 10;
  currentTotlaPages = 0;

  constructor(private api: ApiservicesService, public generalService: GeneralService, private router:Router) { }

  ngOnInit(): void {
    this.getTaskList();
  }
  changeTabs(tab) {
    this.currentTab = tab;
  }
  async getTaskList() {
    let options = {
      PageNumber: 1,
      PageSize: 2,
      isPaging: true
    }
    switch (this.currentTab) {
      case 'assigned':
        let res = await this.api.httpCall(this.api.apiLists.getTasks + '0', {}, options, 'get', true);       
        break;
      case 'forwarded':
        this.api.httpCall(this.api.apiLists.getTasks + '1', {}, options, 'get', true)
        break;
      case 'watchable':
        this.api.httpCall(this.api.apiLists.getTasks + '2', {}, options, 'get', true)
        break;
      default:
        break;
    }
  }
  openNewTaskModal()
  {
    console.log('new task')
    this.router.navigate(['/tasks/new-task']);
  }
}
