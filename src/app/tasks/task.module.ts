import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { TasksRouting } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    TaskListComponent,
    NewTaskComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRouting,
    FormsModule,
    AngularMyDatePickerModule,
    AngularEditorModule
  ]
})
export class TasksModule { }
