import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from './../student.model';

@Component({
  selector: 'app-student-read',
  templateUrl: './student-read.component.html',
  styleUrls: ['./student-read.component.css']
})
export class StudentReadComponent implements OnInit {
  //student.model
  students: Student[]
  displayedColumns = ['id', 'name', 'age', 'developer', 'skills' ]

  constructor(private studentService: StudentService) {
    this.studentService.read().subscribe(students => {
      this.students = students
      console.log(students)
    })
   }

  ngOnInit(): void {
  }

}
