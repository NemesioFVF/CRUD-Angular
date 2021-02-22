import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';

import { HomeComponent } from './views/home/home.component';
import { StudentReadComponent } from './components/student/student-read/student-read.component';
import { StudentUpdateComponent } from './components/student/student-update/student-update.component';
import { StudentDeleteComponent } from './components/student/student-delete/student-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'students',
    component: StudentReadComponent,
  },
  {
    path: 'student/create',
    component: StudentCreateComponent,
  },
  {
    path: 'student/update/:id',
    component: StudentUpdateComponent,
  },
  {
    path: 'student/delete/:id',
    component: StudentDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
