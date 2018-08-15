import { Injectable } from '@angular/core';
// Import Quote class HttpClient and Evironment Object
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Quote} from '../quote-class/quote';

@Injectable()
export class QuoteRequestService {
    quote: Quote;
  // injecting httpclient module inside service constructor
  constructor(private http: HttpClient) {
    // creating quote property initialised with empty string properties
    this.quote = new Quote( '', '');
  }

  // quote request method defining API interface and promise instance
  quoteRequest() {

    interface ApiResponse {
      quote: string;
      author: string;
    }
    const promise = new Promise((resolve, reject) => {
      // calling HttpClient get method passing in apiUrl from environment object
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        // updating property values of quote class instance with values from response
        this.quote.quote = response.quote;
        this.quote.author = response.author;
        // calling resolve function
        resolve();
      },

      // error function called when error is encountered
      error => {
        this.quote.quote = 'Never, never, never give up.';
        this.quote.author = 'Winston churchill';
        reject(error);
      });
    });
    return promise;
  }
}

