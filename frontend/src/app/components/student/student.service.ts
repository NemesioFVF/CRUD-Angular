import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  url = 'http://localhost:3001/students';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student);
  }

  read(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  readById(id: number): Observable<Student> {
    const url = `${this.url}/${id}`;
    return this.http.get<Student>(url);
  }

  update(student: Student): Observable<Student> {
    const url = `${this.url}/${student.id}`;
    return this.http.put<Student>(url, student);
  }

  delete(id: number): Observable<Student> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Student>(url);
  }
}
