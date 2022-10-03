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

  closeModal(): void {
    this.modalSubject.next(false);
  }
}
