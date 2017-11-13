import { Component, OnInit, Input } from '@angular/core';
import "rxjs/add/operator/map";
import { FormsModule } from "@angular/forms";
import { Student } from '../../models/student';

@Component({
  selector: 'app-studentDetail',
  templateUrl: './studentDetail.component.html',
  styleUrls: ['./studentDetail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() student: Student;
  
  private hideElement: boolean = true;

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
