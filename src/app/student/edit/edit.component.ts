/**
 * @author - Shahbaz Shaikh
 * @description - This component are used for edit the existing record on server.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// ----------------------------------------------- //
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // Declear the variable
  public student: Student ;
  public studentForm: FormGroup;

  // In a constructor injcet of service, form builder, activatedRouter and router
  constructor(private service: StudentService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    this.student = new Student();
  }

  ngOnInit() {
    // initialize the edit student and update student method
    this.editStudent();
    this.updateStudent();
  }

   // create a the validation for Student form
   editStudent() {
    this.studentForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [ Validators.required, Validators.minLength(5)]],
      course: ['', [ Validators.required]],
      email: ['', [ Validators.required]],
      phoneNo: ['', [ Validators.required]],
      address: ['', [ Validators.required]]
    });
  }

  // Get existing record from server
  public updateStudent(): void {

    // Get the student id from user
    const id = +this.route.snapshot.paramMap.get('id');
    // patch the existing student record
    this.service.editStudent(id)
          .subscribe( (student) => {
            this.student = student,

        this.studentForm.patchValue({
          id: this.student.id,
          name: this.student.name,
          course: this.student.course,
          email: this.student.email,
          phoneNo: this.student.phoneNo,
          address: this.student.address
        });
    });
  }

  // Submit the student record after edit
  public onSubmit(): void {
    this.service.updateStudent(this.studentForm.value)
          .subscribe( () => {
            this.router.navigate(['/student/view']);
            alert('Update Record Suceefully.');
      });
  }
}
