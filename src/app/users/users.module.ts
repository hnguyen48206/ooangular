import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRouting } from './users-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HelpComponent } from './help/help.component';



@NgModule({
  declarations: [
    UserhomeComponent,
    PersonalInfoComponent,
    ChangePasswordComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    UsersRouting,
  ]
})
export class UsersModule { }
