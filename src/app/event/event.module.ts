import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';


@NgModule({
  declarations: [
    EventComponent,
    EventListComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
