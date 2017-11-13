import { Component, OnInit, Input} from '@angular/core';
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { Subject } from '../../models/subject';
import { Student } from '../../models/student';
import { Phone } from '../../models/phone';

import { SubjectDetailComponent } from '../subjectDetail/subjectDetail.component';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
    @Input() subjects: Subject[];
    @Input()   students: Student[];

  private studentSelected;
  private subjectSelected;
  private data: Subject;
  private dataStudent: Student;



  //ShowHide
  private showStudent = true;
  private showSubject = false;

  constructor(private http: HttpClient) {
    console.log(this.students);
    console.log(this.subjects);
    this.data = new Subject();
    this.dataStudent = new Student();
    console.log(this.data);   
  }

  ngOnInit() {
  }

  changeShowStatus(){
    this.showStudent = !this.showStudent;
    this.showSubject = !this.showSubject;
  }

  createStudent(name, address, phoneName, phoneNumber) {
    this.dataStudent.name = name
    this.dataStudent.address = address

    var phone = new Phone();
    phone.name = phoneName;
    phone.phoneNumber = phoneNumber;
   
    this.dataStudent.phone = new Array<Phone>();
    this.dataStudent.phone.push(phone);    

    this.http.post('http://localhost:3001/student', JSON.stringify(this.dataStudent), { headers: new HttpHeaders().set('Content-Type', 'application/json') })
      .subscribe(data => console.log(data));
  } 
  createSubject(name, description, qt){
    this.data.name = name;
    this.data.description = description;
    this.data.qt = qt;
    this.http.post('http://localhost:3001/subject', JSON.stringify(this.data), { headers: new HttpHeaders().set('Content-Type', 'application/json') })
    .subscribe(data => console.log(data));
  } 
  
  removeStudent() {
    alert(JSON.stringify(this.studentSelected));
  }

  removeSubject() {
    alert(JSON.stringify(this.subjectSelected));
  }
}
