// Output decorator and EventEmitter class imported
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() goal: Goal;
  // EventEmitter object created taking a boolean
  @Output() isComplete = new EventEmitter<boolean>();

  // goalComplete function created
  goalDelete(complete: boolean) {
    // emit method called on isComplete EventEmitter object
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
