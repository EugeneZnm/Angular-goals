import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  // alert me method with string argument
  alertMe(message: string) {

    // alert function
    alert(message);
  }
  constructor() { }
}
