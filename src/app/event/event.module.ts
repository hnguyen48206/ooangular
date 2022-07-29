import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';
import { CalendarComponent } from '../utilities/calendar/calendar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [
    EventComponent,
    EventListComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    NgxPaginationModule,
    NgxLoadingModule
  ]
})
export class EventModule { }
