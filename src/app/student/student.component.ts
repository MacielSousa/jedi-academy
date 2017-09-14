import { Component, OnInit, Input} from '@angular/core';
import {Student} from './student.model';
@Component({
  selector: 'jod-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    console.log(`student: ${this.student.name}`)
  }

}
