import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { ModalService } from 'src/app/services/ui/modal.service';

@Component({
  selector: 'components-templates-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title?: string;
  @ContentChild('body') childBody!: TemplateRef<any>;
  showModal: boolean = false;
  protected modalClass!: String[];

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalClass = ['modal'];
    this.modalService.modalSubject.subscribe((x) => (this.showModal = x));
  }

  openModal(): void {
    this.showModal = true;
    this.modalClass.push('modal-open');
    // this.modalService.openModal();
  }

  closeModal(): void {
    this.showModal = false;
    this.modalClass = this.modalClass.filter((x) => x != 'modal-open');
    // this.modalService.closeModal();
  }
}
