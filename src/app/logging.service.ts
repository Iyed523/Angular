import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(asseignmentName: string, action: string): void {
    console.log("Assignment " + asseignmentName + " " + action);
  }
}
