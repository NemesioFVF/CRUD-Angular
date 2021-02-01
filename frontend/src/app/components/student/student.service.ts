import { StudentService } from './../student.service';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "http://localhost:3001/students"

  constructor(private snackBar: MatSnackBar, private http: HttpClientModule) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student)

  }
}
