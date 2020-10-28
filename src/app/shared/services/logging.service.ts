import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(msg) {
    console.log('Message:', msg)
  }

  logError(msg) {
    console.error('Error:', msg)
  }
}
