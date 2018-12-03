/**
 * @author - Shahbaz Shaikh
 * @description - This routing file are root router module of the whole application.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// ------------------------------------- //
import { DashboardComponent } from './dashboard/dashboard.component';

/**
 * Create a Lazy Loading.
 * Redirect to first initial page of dashboard.
 * Add lazy loaded Module as children.
 */
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'student',
    loadChildren: 'app/student/student.module#StudentModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
