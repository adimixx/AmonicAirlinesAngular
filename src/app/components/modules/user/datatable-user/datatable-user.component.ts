import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from 'src/app/components/templates/modal/modal.component';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/models/user.service';

@Component({
  selector: 'components-modules-user-datatable-user',
  templateUrl: './datatable-user.component.html',
  styleUrls: ['./datatable-user.component.css'],
})
export class DatatableUserComponent implements OnInit {
  @Input() officeId: number = 0;
  users: Array<user> = [];
  faPenToSquare = faPenToSquare;
  selectedUser?: user;

  @ViewChild('editUserModal') editUserModal!: ModalComponent;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.userService.userDataState.subscribe((x) =>
      this.getAllUsers(this.officeId)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllUsers(changes['officeId']?.currentValue ?? 0);
  }

  onEditBtnClicked(id: number): void {
    this.selectedUser = this.users.filter((x) => x.id == id)[0];
    this.editUserModal.openModal();
  }

  protected getAllUsers(officeId: number = 0): void {
    this.userService.getAllUsers(officeId).subscribe((x) => (this.users = x));
  }
}
