import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

// importing Goals property and assigning it to goal property in components
import { GoalService } from '../goals/goal.service';

// importing AlertsService class
import {AlertsService} from '../alert-service/alerts.service';
// Import http client module
import {HttpClient} from '@angular/common/http';

import {Quote} from '../quote-class/quote';
import { Subscriber } from 'rxjs';
import { QuoteRequestService } from '../quote-http/quote-request.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
    // Adding providers to the component
    // importing GoalService and placing it in the providers array
    providers: [GoalService, QuoteRequestService],
  styleUrls: ['./goal.component.css']

})
export class GoalComponent implements OnInit {

    quote: Quote;
    goals: Goal[];
    alertService: AlertsService;
    //  injecting GoalService alertService QuoteRequestService
    constructor(goalService: GoalService, alertService: AlertsService, private quoteService: QuoteRequestService, private router: Router) {
      // call getGoals method and assign it to goals property
      this.goals = goalService.getGoals();
      this.alertService = alertService;
    }

    goToUrl(id) {
      this.router.navigate(['/goals', id]);
    }

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
deleteGoal(index) {
    // toDelete boolean variable that calls confirm function creating browser prompt for confirmation of deletion
    const toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`);

    if (toDelete) {
      // splice function removing goal from list of goals using index
      this.goals.splice(index, 1);
      // calling alertMe Method and passing in message to be displayed
      this.alertService.alertMe('Goal has been deleted');
    }
  }
  // inject quote request service into ngOnInit

  ngOnInit()  {
    this.quoteService.quoteRequest();
    // equate quote property with quote property in the service
    this.quote = this.quoteService.quote;
    }
  }
    // using get method and pass it to API and call subscribe function
    // // this.http.get<ApiResponse>('https://talaikis.com/api/quotes/random/').subscribe(data => {
    //   // subscribe function takes in data function that is called when API request is successful and returns response
    // this.quote = new Quote(data.quote, data.author);
    // },
    // // function err creating a backup quote instance assigned to quote property
    //  err => {
    //   this.quote = new Quote('Never, never, never give up.', 'winston churchill' );
    //   // error log incase of failed request
    //   console.log('Error occurred');

