/**
 * @author - Shahbaz Shaikh
 * @description - This service are create for communicate with component to Json Server.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// --------------------------------------- //
import { Student } from './student.model';


@Injectable()
export class StudentService {

  // Declare the URL for server
  private dbUrl: string;

  constructor(private http: HttpClient) {
    // Define the URL for server
    this.dbUrl = 'http://localhost:3000/student';
  }

   // Get methods
  // Student Details from the server using Get method
  getStudents(): Observable<Student[]> {

    return this.http.get<Student[]>(this.dbUrl);
  }

   // Save methods
  // add a new Student Details to the server using Post Method
  addStudent(student: Student): Observable<Student> {

    return this.http.post<Student>(this.dbUrl, student);
  }

   // Delete methods
  // add a new Student Details to the server using Delete method
  deleteStudent(id: number): Observable<Student[]> {
    const url = this.dbUrl + `/` + id;
    return this.http.delete<Student[]>(url);
  }

   // Edit methods
   // Get the Student record from server with id
  editStudent(id: number): Observable<Student> {
    const url = this.dbUrl + `/` + id;
    return this.http.get<Student>(url);
  }

   // Update methods
   // Upadte record in database using PUT method
  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.dbUrl + `/` + student.id, student);
  }
}
