import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { ApiservicesService } from 'src/app/services/api.service';
import { GeneralService } from 'src/app/services/general.service';
import * as moment from 'moment';
import { WizardComponent } from 'angular-archwizard';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;

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

  step1BtnClicked = false
  step2BtnClicked = false
  step3BtnClicked = false

  constructor(private router: Router, private api: ApiservicesService, public generalService: GeneralService) { }
  wizardNavbtnClicked(step, direction) {
    if (step == 1) {
      this.step1BtnClicked = true
      if (this.step1Validator())
      this.wizardGoodToGo(direction)
    }
    else if (step == 2) {
      this.step2BtnClicked = true
      if(direction == 'next')
      {
        if(this.step2Validator())
        this.wizardGoodToGo(direction)
      }
      else
      this.wizardGoodToGo(direction)
    }
    else if (step == 3) {
      this.step3BtnClicked = true
    }
  }
  wizardGoodToGo(direction) {
    if (direction == 'next')
      this.wizard.goToNextStep();
    else if (direction == 'previous')
      this.wizard.goToPreviousStep();
  }


  /////////////////////// Step 1
  step1Validator() {
    if (this.taskName == '' || this.startDate == null || this.endDate == null || this.htmlContent == null) {
      this.generalService.showErrorToast(2, 'Các trường đánh dấu (*) không được bỏ trống');
      return false;
    }
    else if (!this.compareTwoDates()) {
      this.generalService.showErrorToast(2, 'Ngày kết thúc cần lớn hơn hoặc bằng ngày bắt đầu');
      return false;
    }
    else
      return true
  }
  onStartDateChanged(event: IMyDateModel) {
    // console.log(event.singleDate.formatted)   
  }
  onEndDateChanged(event: IMyDateModel) {
    // console.log(event.singleDate.formatted) 
  }
  ngOnInit(): void {
    this.allUserInStep2List = this.generalService.cloneAnything(this.generalService.allUsers);
    this.allUserInStep3List = this.generalService.cloneAnything(this.generalService.allUsers);
  }
  ngOnDestroy(): void {
  }
  goBack() {
    this.router.navigate(['/tasks/task-list']);
  }
  getProjectList() {

  }
  getCustomerList() {

  }
  getTaskGroupList() {

  }
  getSampleTaskist() {

  }
  compareTwoDates() {
    let start = moment(this.startDate.singleDate.formatted, 'DD-MM-YYYY')
    let end = moment(this.endDate.singleDate.formatted, 'DD-MM-YYYY')
    let diff = end.diff(start, 'days', false);
    if (diff < 0)
      return false
    else
      return true
  }

  ////////////////////////Step 2

  allUserInStep2List
  chosenAssigneelList: any[] = [
  ];

  majorAssignee
  dualListUpdateForAssignee(event)
  {
    this.allUserInStep2List=event.leftList; this.chosenAssigneelList=event.rightList

    //kiem tra xem majorAssignee đã chọn trước đó còn trong list chosen hay ko.
    if(this.majorAssignee!=null)
    {
      let check=false;
      for(let i=0; i<this.chosenAssigneelList.length;++i)
      {
        if(this.majorAssignee == this.chosenAssigneelList[i])
        { check=true; break; }
      }
      if(!check)
      this.majorAssignee=null
    }
  }
  step2Validator() {
    if (this.chosenAssigneelList.length==0) {
      this.generalService.showErrorToast(2, 'Vui lòng chọn danh sách người tham gia xử lý');
      return false;
    }
    else if (this.majorAssignee==null) {
      this.generalService.showErrorToast(2, 'Vui lòng chọn người xử lý chính');
      return false;
    }
    else
      return true
  }
  //////////////////////////Step 3

  allUserInStep3List
  chosenAudienceList: any[] = [
  ];

  dualListUpdateForAudience(event)
  {
    this.allUserInStep3List=event.leftList; this.chosenAudienceList=event.rightList
  }
  step3Validator() {
  }

  createNewTask() {
    let body = {
      "chude": "string",
      "msda": "string",
      "noidung": "string",
      "ngayBatDau": "string",
      "ngayHoanThanhDuKien": "string",
      "nguoiXuLyChinh": "string",
      "laCongViecKhan": true,
      "nguoiTao": "string",
      "participants": [
        {
          "nguoiXuLy": "string"
        }
      ],
      "viewers": [
        {
          "nguoiDuocXem": "string"
        }
      ]
    }

    this.api.httpCall(this.api.apiLists.createNewTask, {}, body, 'post', true)
  }

}



