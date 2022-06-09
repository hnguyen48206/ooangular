import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  htmlContent = '';
  project = ''
  projectList
  customer = ''
  customerList
  taskGroup = ''
  taskGroupList
  sampleTask = ''
  sampleTaskList
  taskName = ''
  startDate
  endDate
  unknownTimeCheck = false
  public myDatePickerOptions: IAngularMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: false,
    minHeight: '80',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Nhập nội dung...',   
  };

constructor(private router: Router) { }


/////////////////////// Step 1

onStartDateChanged(event: IMyDateModel) {

}
onEndDateChanged(event: IMyDateModel) {

}
ngOnInit(): void {
}
ngOnDestroy(): void {
}
goBack() {
  this.router.navigate(['/tasks/task-list']);
}
getProjectList() {

}
getCustomerList()
{

}
getTaskGroupList()
{

}
getSampleTaskist()
{

}
////////////////////////Step 2


PersonelList: any[] = [
  { id: 1, name: 'Moscow' },
  { id: 2, name: 'Saint Petersburg' },
  { id: 3, name: 'Novosibirsk' },
  { id: 4, name: 'Vladivostok' },
  { id: 5, name: 'Krasnodar' },
  { id: 6, name: 'Kaliningrad' },
  { id: 7, name: 'Krasnoyarsk' }
];

ChosenAssigneelList: any[] = [
];

majorAssignee = ''

}
