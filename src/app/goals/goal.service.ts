import { Injectable } from '@angular/core';
import { Goals} from '../goals';
// injectable decorator used to create a service class
@Injectable()
export class GoalService {

  // method returning array Goals
  getGoals() {
    return Goals;
  }
// get goal method taking id as argument
  getGoal(id) {
    // for loop looping through array of goals
    for (const goal of Goals) {
      // if statement checking if any of the goals matches the id parameter
      if (goal.id === id) {
        // matching goal returns and loop is exited
        return goal;
      }
    }
  }

  constructor() { }
}
