import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from './../student.model';



@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student = {
    name: '',
    age: null,
    developer: '',
    skills: ''
  }

  constructor(private studentService: StudentService, 
              private router: Router) { }

  ngOnInit(): void {
    
  }

  createStudent(): void {
    this.studentService.create(this.student).subscribe(()=> {
      this.studentService.showMessage('Aluno criado com sucesso!')
      this.router.navigate(['/students'])
    })
  }

  cancel(): void {
    this.router.navigate(['/students'])
  }
}
