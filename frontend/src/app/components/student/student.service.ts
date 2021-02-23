import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.model';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  url = 'http://localhost:3001/students';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Student> {
    const url = `${this.url}/${id}`;
    return this.http.get<Student>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(student: Student): Observable<Student> {
    const url = `${this.url}/${student.id}`;
    return this.http.put<Student>(url, student).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Student> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Student>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  //Mensagem de erro relacionado se o banco de dados estiver Off
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  }
}
