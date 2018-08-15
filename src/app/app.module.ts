// IMPORTATION OF EXTERNAL MODULES USED IN APPLICATION
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importation of FormsModule to the root module
import {FormsModule} from '@angular/forms';
// importation of AlertsService
import {AlertsService} from './alert-service/alerts.service';
// import HttpCLientModule - allows use of HttpClient in application
import {HttpClientModule} from '@angular/common/http';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressHttpModule} from '@ngx-progressbar/http';
 // installing routing modules from external router library
 import { RouterModule, Routes} from '@angular/router';
 import {RoutingModule} from './routing/routing.module';
// IMPORTATION OF COMPONENTS AND DIRECTIVES DECLARED IN APP MODULE
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuoteRequestService } from './quote-http/quote-request.service';
import { GoalService } from './goals/goal.service';

// defining routes
const routes: Routes = [
  {path: 'goals', component: GoalComponent},
  {path: 'about', component: AboutComponent},
  {path: '**' , component: NotFoundComponent},
  // {path: '', redirectTo: '/goals', pathMatch: 'full'}, // redirected if URL matches '' fully
    // route to not found array
 ]; // Routes array determines navigation through project


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
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent

  ],

  // Modules containing features to be used in app
  imports: [
    // Allows running of application in the browser
    BrowserModule,
    // Imported FormsModule placed in imports array
    FormsModule,

    // add HttpClientModule to client array
    HttpClientModule,
    // ROuting Module
    RoutingModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    RouterModule.forRoot(routes)
  ],
  // providers array used to register different services needed by application
  providers: [AlertsService, QuoteRequestService, GoalService], // addition of AlertsService service to provider
  // Application launched by bootstrapping root component AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
