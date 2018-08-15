// Output decorator and EventEmitter class imported
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Goal} from '../goal';

// importing goalservice and registering it in the component provider
import {GoalService} from '../goals/goal.service';
// import Activate Route to retrieve parameter from the route, ParaMap provides the methods handling parameter access
import {ActivatedRoute, ParamMap} from '@angular/router';

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

  // injecting ActivateRoute service and goalService route in constructor
  constructor(private route: ActivatedRoute, private service: GoalService) { }

  ngOnInit() {
    // route.snapshot to get initial value of route parameter map and id extracted with get method provided by paraMap function
    const id = this.route.snapshot.paramMap.get('id');
    // id extracted passed into service getGoal method with returning instance assigned to goal property of component
    this.goal = this.service.getGoal(id);
  }

}
