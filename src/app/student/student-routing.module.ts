/**
 * @author - Shahbaz Shaikh
 * @description - This routing file are used for fetures module compponent route.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// ---------------------------------------- //
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

/**
 * Set the path for component navigation
 * Import the component
 */
const studentRoutes: Routes = [
  {
    path: 'view',
    component:  ViewComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule { }
