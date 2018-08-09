// importation of Output and EventEmitter functions
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// importation of Goal class
import {Goal} from '../goal';
@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  // creation of newGoal property in GoalFormComponent Class
  newGoal = new Goal(0, '' , '', new Date()); // default object changed by form inputs

  // addGoal EventEmitter object created
  @Output() addGoal = new EventEmitter<Goal>();

  // submitGoal function called
  submitGoal() {
    this.addGoal.emit(this.newGoal);
  }
  constructor() { }

  ngOnInit() {
  }

}
