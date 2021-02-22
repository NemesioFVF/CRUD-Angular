import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from './../student.model';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css'],
})
export class StudentUpdateComponent implements OnInit {
  student: Student;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  //inicialização do componente ja vir com o formulario preenchido!
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.readById(id).subscribe((student) => {
      this.student = student;
    });
  }

  updateStudent(): void {
    this.studentService.update(this.student).subscribe(() => {
      this.studentService.showMessage('Estudante atualizado com sucesso!');
      this.router.navigate(['/students']);
    });
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }
}
