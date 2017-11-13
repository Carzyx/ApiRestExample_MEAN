import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppNavbar } from './shared/navbar/navbar.component';
import { ResumComponent } from './components/resum/resum.component';
import { SubjectDetailComponent } from './components/subjectDetail/subjectDetail.component';
import { StudentDetailComponent } from './components/studentDetail/studentDetail.component';
import { CrudComponent } from './components/crud/crud.component';



@NgModule({
  declarations: [
    AppComponent,
    AppNavbar,
    ResumComponent,
    SubjectDetailComponent,
    StudentDetailComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppNavbar,
  ]
})
export class AppModule { }
