/**
 * @author - Shahbaz Shaikh
 * @description - This core module create navigation bar in over application.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// --------------------------------------- //
import { TopbarComponent } from './navbar/topbar/topbar.component';
import { SidebarComponent } from './navbar/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopbarComponent,
    SidebarComponent
  ],
  exports: [
    TopbarComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
