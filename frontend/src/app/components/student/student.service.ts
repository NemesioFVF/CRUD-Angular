import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "http://localhost:3001/students"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

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
