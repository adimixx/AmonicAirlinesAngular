import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/components/templates/modal/modal.component';

@Component({
  selector: 'components-modules-user-button-create-user',
  templateUrl: './button-create-user.component.html',
  styleUrls: ['./button-create-user.component.css'],
})
export class ButtonCreateUserComponent implements OnInit {
  @ViewChild('createUserModal') private createUserModal!: ModalComponent;

  constructor() {}

  ngOnInit(): void {}

  open(): void {
    this.createUserModal.openModal();
  }
}
