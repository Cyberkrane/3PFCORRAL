import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { HomeStudentsComponent } from './home-students.component';


@NgModule({
  declarations: [
    HomeStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
  ]
})
export class StudentsModule { }
