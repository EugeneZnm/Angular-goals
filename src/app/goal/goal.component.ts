import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son'),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot'),
    new Goal(3, 'Get new Phone Case', 'Diana has her birthday coming up soon'),
    new Goal(4, 'Get Dog Food', 'Pupper likes expensive snacks'),
    new Goal(5, 'Solve math homework', 'Damn Math'),
    new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord'),
];
// toggleDetails function taking in index position as an argument in our component
toggleDetails(index) {
  // toggleDetails function locates the goal at the index passed in and converts  the showDescription
  this.goals[index].showDescription = !this.goals[index].showDescription;
}


  constructor() { }

  ngOnInit() {
  }

  // completeGoal function where javascript splice function is used to remove complete goal and delete from array
completeGoal(isComplete, index) {
  if (isComplete) {
      this.goals.splice(index, 1);
      }
      }

}
