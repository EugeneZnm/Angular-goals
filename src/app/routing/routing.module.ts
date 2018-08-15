import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {GoalComponent} from '../goal/goal.component';
import {AboutComponent} from '../about/about.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import { GoalDetailsComponent } from '../goal-details/goal-details.component';

// Defining Routes
const routes: Routes =  [
  {path: 'goals', component: GoalComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/goals', pathMatch: 'full'},
  // route mapping to a specific goal
  {path: 'goals/:id', component: GoalDetailsComponent}, // id token allows for slot for route parameter
  // id of goal retrieves specific goal
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
