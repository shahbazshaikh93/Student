/**
 * @author - Shahbaz Shaikh
 * @description - This module file create for student fetures module.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'shahbaz-shaikh-table-package';
// --------------------------------------------------- //
import { StudentRoutingModule } from './student-routing.module';
import { StudentService } from './student.service';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    // Import Reactive forms module for RectiveForms
    ReactiveFormsModule,
    // Import Table module from another table package
    TableModule
  ],
  declarations: [
    ViewComponent,
    AddComponent,
    EditComponent
  ],
  providers: [
    // Provides the service for communication with server
    StudentService
  ]
})
export class StudentModule { }
