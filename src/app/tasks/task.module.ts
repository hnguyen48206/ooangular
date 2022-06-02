import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { TasksRouting } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TasksRouting,
    FormsModule,
    AngularMyDatePickerModule,
  ]
})
export class TasksModule { }
