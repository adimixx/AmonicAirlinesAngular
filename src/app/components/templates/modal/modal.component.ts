import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/ui/modal.service';

@Component({
  selector: 'components-templates-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() name: string = '';
  @Input() title?: string;
  input: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalSubject.subscribe((x) => (this.input = x));
  }

  closeModal(): void {
    this.modalService.closeModal();
  }
}
