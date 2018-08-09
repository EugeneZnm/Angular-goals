// IMPORTATION OF EXTERNAL MODULES USED IN APPLICATION
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importation of FormsModule to the root module
import {FormsModule} from '@angular/forms';


// IMPORTATION OF COMPONENTS AND DIRECTIVES DECLARED IN APP MODULE
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';


// ngModule DECORATOR IDENTIFIES THE APPMODULE AS AN ngModule CLASS
// Decorator has metadata telling Angular how to run the application
@NgModule({
  // Declarations array tells Angular what apps belong in the AppModule
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent
  ],

  // Modules containing features to be used in app
  imports: [
    // Allows running of application in the browser
    BrowserModule,
    // Imported FormsModule placed in imports array
    FormsModule,
  ],
  // providers array used to register different services needed by application
  providers: [], // empty due to lack of services needed // services delivered by dependency injection

  // Application launched by bootstrapping root component AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
