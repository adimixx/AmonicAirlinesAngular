import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalSubject = new Subject<boolean>();

  constructor() {
    this.modalSubject.next(false);
  }

  openModal(): void {
    this.modalSubject.next(true);
  }

  closeModal(): void {
    this.modalSubject.next(false);
  }
}
