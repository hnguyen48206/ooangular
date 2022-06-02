import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskListComponent } from "./task-list/task-list.component";


const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
    data: { "link": "/tasks" },
    children: [
      // {
      //   data: { "link": "/user/info" },
      //   path:'info',
      //   component:PersonalInfoComponent
      // },
      // {
      //   data: { "link": "/user/change-password" },
      //   path:'change-password',
      //   component:ChangePasswordComponent
      // },
      // {
      //   data: { "link": "/user/help" },
      //   path:'help',
      //   component:HelpComponent
      // }
          ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TasksRouting { }