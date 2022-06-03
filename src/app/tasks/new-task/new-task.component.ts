import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  htmlContent= '';
  project=''
  customer=''
  taskGroup=''
  sampleTask=''
  taskName=''
  startDate
  endDate
  public myDatePickerOptions: IAngularMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  constructor(private router:Router) { }

  onStartDateChanged(event: IMyDateModel)
  {

  }
  onEndDateChanged(event: IMyDateModel)
  {
    
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  goBack()
  {
    this.router.navigate(['/tasks/task-list']);
  }

  ////////////////////////Step 2

  
  leftList: any[] = [
    { id: 1, name: 'Moscow' },
    { id: 2, name: 'Saint Petersburg' },
    { id: 3, name: 'Novosibirsk' },
    { id: 4, name: 'Vladivostok' },
    { id: 5, name: 'Krasnodar' },
    { id: 6, name: 'Kaliningrad' },
  ];

  rightList: any[] = [
    { id: 7, name: 'Krasnoyarsk' }
  ];



}
