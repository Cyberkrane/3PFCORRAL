import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { HomeStudentsComponent } from './home-students.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsFormComponent } from './components/students-form/students-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeStudentsComponent,
    StudentsTableComponent,
    StudentsFormComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
