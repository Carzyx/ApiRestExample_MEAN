import { Component, OnInit, Input } from '@angular/core';
import "rxjs/add/operator/map";
import { FormsModule } from "@angular/forms";
import { Subject } from '../../models/subject';
import { Student } from '../../models/student';

import { StudentDetailComponent } from '../studentDetail/studentDetail.component';


@Component({
  selector: 'app-subjectDetail',
  templateUrl: './subjectDetail.component.html',
  styleUrls: ['./subjectDetail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  @Input() subject: Subject;
  private hideElement: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }
  
  showHide() {
    if (this.hideElement) {
      this.hideElement = false;
    }
    else{
      this.hideElement = true;
    }
  } 
  
}
