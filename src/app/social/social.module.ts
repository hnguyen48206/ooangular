import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social/social.component';
import { NotificationComponent } from './notification/notification.component';
import { SocialRouting } from './social-routing.module';
import { NewsComponent } from './news/news.component';
import { LibraryComponent } from './library/library.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxLoadingModule } from "ngx-loading";


@NgModule({
  declarations: [
    SocialComponent,
    NewsComponent,
    LibraryComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    SocialRouting,
    NgxPaginationModule,
    NgxLoadingModule.forRoot({}),
  ]
})
export class SocialModule { }
