import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  constructor(private studentService: StudentService, 
              private router: Router) { }

  ngOnInit(): void {
    
  }

  createStudent(): void {
    this.studentService.showMessage('Aluno criado com sucesso!')
  }

  cancel(): void {
    this.router.navigate(['/students'])
  }
}
