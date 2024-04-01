// annance-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnanceStateService {
  private isOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setIsOpen(isOpen: boolean): void {
    this.isOpenSubject.next(isOpen);
  }

  getIsOpen(): Observable<boolean> {
    return this.isOpenSubject.asObservable();
  }
}
