import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { StudentComponent } from './views/student/student.component';
import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule }from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StudentReadComponent } from './components/student/student-read/student-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    StudentComponent,
    RedDirective,
    ForDirective,
    StudentCreateComponent,
    StudentReadComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatGridListModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
