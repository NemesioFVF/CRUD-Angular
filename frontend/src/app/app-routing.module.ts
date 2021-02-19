import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { StudentCreateComponent } from './components/student/student-create/student-create.component';

import { HomeComponent } from './views/home/home.component';
import { StudentReadComponent } from './components/student/student-read/student-read.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "students",
    component: StudentReadComponent
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
