import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son', new Date(2018, 3, 14) ),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2018, 6, 9) ),
    new Goal(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date(2018, 1, 12) ),
    new Goal(4, 'Get Dog Food', 'Pupper likes expensive snacks', new Date(2018, 0, 18) ),
    new Goal(5, 'Solve math homework', 'Damn Math', new Date(2018, 2, 14) ),
    new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date(2018, 3, 14) ),

];
// creating newGoal function taking goal object as argument
addNewGoal(goal) {
  // length of array of goals stored in variable goalLength
  const goalLength = this.goals.length;
  // addition of one to goal length and setting it as new id for the goal
  goal.id = goalLength + 1;
  // setting completeDate property of goal object to a Date Object
  goal.completeDate = new Date(goal.completeDate);
  // push new goals to array of goals
  this.goals.push(goal);
}

// toggleDetails function taking in index position as an argument in our component
toggleDetails(index) {
  // toggleDetails function locates the goal at the index passed in and converts  the showDescription
  this.goals[index].showDescription = !this.goals[index].showDescription;
}

// deleteGoal function taking boolean value and index of goal
deleteGoal(isComplete, index) {
  if (isComplete) {
    // toDelete boolean variable that calls confirm function creating browser prompt for confirmation of deletion
    const toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`);

    if (toDelete) {
      // splice function removing goal from list of goals using index
      this.goals.splice(index, 1);
    }
  }
}
  constructor() { }

  ngOnInit() {
  }
}
