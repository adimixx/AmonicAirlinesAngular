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
    this.modalService.modalSubject.subscribe((x) =>
      this.operateModalVisibility(x)
    );
  }

  openModal(): void {
    this.modalService.openModal();
    this.modalClass = ['modal', 'modal-open'];
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  protected operateModalVisibility(show: boolean) {
    this.showModal = show;
    this.modalClass = ['modal'];
  }
}
