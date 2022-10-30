import { Injectable } from '@angular/core';
import { Subject, of, timer } from 'rxjs';
import { switchMap, debounceTime, debounce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private static subject = new Subject<boolean>()
  private static numRequest = 0;

  constructor() {

  }

  addRequest() {
    LoadingService.numRequest++;
    LoadingService.subject.next(LoadingService.numRequest > 0);
  }

  removeRequest() {
    LoadingService.numRequest--;
    if (LoadingService.numRequest < 0) {
      LoadingService.numRequest = 0;
    }
    LoadingService.subject.next(LoadingService.numRequest > 0);
  }

  getObservable() {
    return LoadingService.subject.asObservable().pipe(
      debounce((v) => v ? timer(800) : of())
    );
  }
}
