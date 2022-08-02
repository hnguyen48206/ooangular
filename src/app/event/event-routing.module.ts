import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path: '',
    data: { 'link': '/event' },
    component: EventComponent,
    children: [
      {
        data: { "link": "/event/event-list" },
        path: 'event-list',
        component: EventListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
