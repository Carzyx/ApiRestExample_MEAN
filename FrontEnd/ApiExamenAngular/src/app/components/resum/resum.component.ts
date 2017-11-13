import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { Subject } from '../../models/subject';
import { Student } from '../../models/student';

import { SubjectDetailComponent } from '../subjectDetail/subjectDetail.component';


@Component({
  selector: 'app-resum',
  templateUrl: './resum.component.html',
  styleUrls: ['./resum.component.css']
})
export class ResumComponent implements OnInit {
  private subjects;
  private copySubjects;
  private students;
  private studentSelected;
  private subjectSelected;
  private data: Subject;
  private dataStudent: Student;

  private studentSelected2;
  private subjectSelected2;
  private filterSelected: string;


  //ShowHide
  private hideElement: boolean = false;
  private showStudent = true;
  private showSubject = false;

  constructor(private http: HttpClient) {
    this.subjects = this.getSubjects()
    this.students = this.getStudents()
    console.log(this.students);
    console.log(this.subjects);
    this.data = new Subject();
    this.dataStudent = new Student();
    console.log(this.data);
    this.filterSelected = 'name';
    this.copySubjects = this.getSubjects()
  }

  ngOnInit() {
  }

  changeShowStatus() {
    this.showStudent = !this.showStudent;
    this.showSubject = !this.showSubject;
  }

  getSubjects() {
    this.http.get('http://localhost:3001/subject')
      .subscribe(res => {
        console.log(res);
        this.subjects = res;
      });
  }
  getStudents() {
    this.http.get('http://localhost:3001/student')
      .subscribe(res => {
        console.log(res);
        this.students = res;
      });
  }


  matriculate() {
    this.subjectSelected.students.push(this.studentSelected);
    this.subjectSelected.id = this.subjectSelected['_id']
    console.log(JSON.stringify(this.subjectSelected));
    this.http.put('http://localhost:3001/subject', JSON.stringify(this.subjectSelected), { headers: new HttpHeaders().set('Content-Type', 'application/json') })
      .subscribe(data => console.log(data));
  }

  onKey(textMatch) {
    var subjects = this.copySubjects;
    
    var newSubjects: Subject[];
    for (var index = 0; index < subjects.length; index++) {
      var element = this.subjects[index];
       let prop : string = this.filterSelected
       if(element[prop] == textMatch)
      {
        newSubjects.push(element);
      }      
    }

    this.subjects = newSubjects;
  }
}
