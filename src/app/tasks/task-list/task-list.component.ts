import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/api.service';
import { GeneralService } from 'src/app/services/general.service';
import data from './task-list.language';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  spinnerLoading = false
  currentTab = 'assigned'
  currentAssignedTask
  originalAssignedTask
  currentForwardedTask
  originalForwardedTask
  currentWatchableTask
  originalWatchableTask

  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  searchKey = '';
  page = 0;
  count = 0;
  pageSize = 10;
  pageSizes = [10, 20, 30];



  constructor(private api: ApiservicesService, public generalService: GeneralService, private router: Router) { }

  ngOnInit(): void {
    this.getTaskList();
  }
  getLabel(key)
  {
    return data[`${this.generalService.currentLanguage.Code}`][`${key}`]
  }
  changeTabs(tab) {
    this.searchKey = ''
    this.currentTab = tab;
    this.page = 0;
    this.count = 0;
    this.pageSize = 10;
    this.getTaskList();
  }

  async getTaskList() {
    this.spinnerLoading = true;
    let options = {
      PageNumber: this.page,
      PageSize: this.pageSize,
      isPaging: true
    }
    try {
      let res
      let result
      switch (this.currentTab) {
        case 'assigned':
          res = await this.api.httpCall(this.api.apiLists.getTasks + '0', {}, options, 'get', true);
          result = <any>res
          this.originalAssignedTask = result.data;
          this.currentAssignedTask = Array.from(this.originalAssignedTask)
          this.count = result.totalRecords
          break;
        case 'forwarded':
          res = await this.api.httpCall(this.api.apiLists.getTasks + '1', {}, options, 'get', true);
          result = <any>res
          this.originalForwardedTask = result.data;
          this.currentForwardedTask = Array.from(this.originalForwardedTask)
          this.count = result.totalRecords
          break;
        case 'watchable':
          res = await this.api.httpCall(this.api.apiLists.getTasks + '2', {}, options, 'get', true);
          result = <any>res
          this.originalWatchableTask = result.data;
          this.currentWatchableTask = Array.from(this.originalWatchableTask)
          this.count = result.totalRecords
          break;
        default:
          break;
      }
      this.spinnerLoading = false
    } catch (error) {
      this.spinnerLoading = false
    }

  }
  openNewTaskModal() {
    console.log('new task')
    this.router.navigate(['/tasks/new-task']);
  }
  handlePageChange(event): void {
    this.page = event;
    this.getTaskList();
  }
  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 0;
    this.getTaskList();
  }
  filterList() {
    console.log(this.searchKey)
    switch (this.currentTab) {
      case 'assigned':
        if (this.originalAssignedTask != null) {
          let self = this;
          if (this.searchKey != '')
            this.currentAssignedTask = this.originalAssignedTask.filter(function (v, i) {
              if (v.name.toLowerCase().indexOf(self.searchKey) >= 0 || v.country.toLowerCase().indexOf(self.searchKey) >= 0) {
                return true;
              } else false;
            });
          else
            this.currentAssignedTask = Array.from(this.originalAssignedTask)
        }
        break;
      case 'forwarded':
        if (this.originalForwardedTask != null) {
          let self = this;
          if (this.searchKey != '')
            this.currentForwardedTask = this.originalForwardedTask.filter(function (v, i) {
              if (v.name.toLowerCase().indexOf(self.searchKey) >= 0 || v.country.toLowerCase().indexOf(self.searchKey) >= 0) {
                return true;
              } else false;
            });
          else
            this.currentForwardedTask = Array.from(this.originalForwardedTask)
        }
        break;
      case 'watchable':
        if (this.originalWatchableTask != null) {
          let self = this;
          if (this.searchKey != '')
            this.currentWatchableTask = this.originalWatchableTask.filter(function (v, i) {
              if (v.name.toLowerCase().indexOf(self.searchKey) >= 0 || v.country.toLowerCase().indexOf(self.searchKey) >= 0) {
                return true;
              } else false;
            });
          else
            this.currentWatchableTask = Array.from(this.originalWatchableTask)
        }
        break;
      default:
        break;
    }
  }

}
