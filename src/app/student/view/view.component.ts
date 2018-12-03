/**
 * @author - Shahbaz Shaikh
 * @description - This component create for view and delete the student record.
 */
import { Component, OnInit } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
// ------------------------------------- //
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  // Declare the variable
  public students: Student[];
  public studentkeys: any[];
  private subscription: ISubscription;

  // In a constructor are inject the Student Service
  constructor(private service: StudentService, private route: Router) {
    // Define the variable
    this.students = [];
    // Get the student record key of value
    this.studentkeys = ['id', 'name', 'course', 'email', 'phoneNo', 'address'];
  }

  ngOnInit() {
    // initialize the get student method
    this.getStudents();
    
  }

  /**
   * Get the student data from server and send to the user
   */
  public getStudents(): void {
    this.subscription =this.service.getStudents()
          .subscribe( (student) => {
            this.students = student;
    });
  }

   /**
   * This method are delete the data from server.
   * @param id - Get the student ID from User
   */
  public deleteStudent(id: number): void {
    alert('Are you sure you want to delete Student detail?');
    // Send the student ID to service file.
    this.service.deleteStudent(id)
          .subscribe( () => this.getStudents()
    );
  }

  // User Navigate to Add Page
  public addStudent(): void {
    this.route.navigate(['/student/add']);
  }

  // User Get id from user and navigate to Edit Page
  public editStudent(id: number) {
    this.route.navigate(['/student/edit/' + '/' + id]);
  }
  /**
   * User navigate to next component destroy subscribe
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
