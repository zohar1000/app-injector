import { LoggingService } from '../services/logging.service';
import { Directive } from '@angular/core';
import { appInjector } from '../injectors/app.injector';

@Directive()
export abstract class BaseComponent {
  loggingService: LoggingService;

  constructor() {
    this.loggingService = appInjector.get(LoggingService);
  }

  log(msg): void {
    this.loggingService.log(msg);
  }

  logError(msg): void {
    this.loggingService.logError(msg);
  }
}
