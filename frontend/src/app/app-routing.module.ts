import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { StudentCreateComponent } from './components/student/student-create/student-create.component';

import { HomeComponent } from './views/home/home.component';
import { StudentComponent } from './views/student/student.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "students",
    component: StudentComponent
  },
  {
    path: "student/create",
    component: StudentCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
