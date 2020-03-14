import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxLoaderSpinnerService {

  /**
   * Loading
   */
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  /**
   * Show loader
   */
  show() {
    this.loading.next(true);
  }

  /**
   * Hide loader
   */
  hide() {
    this.loading.next(false);
  }

  /**
   * Loader status
   */
  loaderStatus(): Observable<boolean> {
    return this.loading;
  }
}
