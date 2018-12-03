/**
 * @author - Shahbaz Shaikh
 * @description - This add component are used of store the student record on Server.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// ------------------------------------------- //
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // Deacle the variable
  public studentForm: FormGroup;

  // In a constructor inject the student service, form builder and router
  constructor(private service: StudentService, private fb: FormBuilder,  private router: Router) { }

  ngOnInit() {
    // initialize the save student method
    this.saveStudent();
  }

  // create a the validation for Student form
  saveStudent() {
    this.studentForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(5)]],
      course: ['', [ Validators.required]],
      email: ['', [ Validators.required]],
      phoneNo: ['', [ Validators.required]],
      address: ['', [ Validators.required]]
    });
  }

 // Submit the student record on Server
  onSubmit(): void {
    const stud = Object.assign({}, this.studentForm.value);
    this.service.addStudent(stud).subscribe( () => {
      // Reset the Student form
        this.studentForm.reset();
      // Navigate the after successfully save student record
        this.router.navigate(['/student/view']);
    });
  }
}
