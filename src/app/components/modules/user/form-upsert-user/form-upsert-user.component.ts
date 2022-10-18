import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { role } from 'src/app/models/role';
import { user } from 'src/app/models/user';
import { RoleService } from 'src/app/services/models/role.service';
import { UserService } from 'src/app/services/models/user.service';
import { ModalService } from 'src/app/services/ui/modal.service';

@Component({
  selector: 'components-modules-user-form-upsert-user',
  templateUrl: './form-upsert-user.component.html',
  styleUrls: ['./form-upsert-user.component.css'],
})
export class FormUpsertUserComponent implements OnInit {
  @Input() existingUser?: user;
  form!: FormGroup;
  propRoles: role[] = [];

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private userService: UserService,
    private roleService: RoleService
  ) {}

  async ngOnInit(): Promise<void> {
    this.form = this.generateFormGroup();

    if (this.existingUser != null) {
      this.propRoles = await this.getRolesProp();
    }
  }

  onSubmit(): void {
    if (this.form.status == 'VALID') {
      let data = this.form.value;

      if (!this.existingUser) {
        this.userService
          .createUser(data)
          .then((x) => this.modalService.closeModal());
      } else {
        firstValueFrom(
          this.userService.updateUser(this.existingUser.id, data)
        ).then(() => this.modalService.closeModal);
      }
    }
  }

  onCancelBtnClicked(): void {
    this.modalService.closeModal();
  }

  validateInputError(key: string): boolean {
    return this.form.controls[key]?.touched && this.form.controls[key].invalid;
  }

  private generateFormGroup(): FormGroup {
    let group: FormGroup = this.fb.group({
      email: [
        this.existingUser?.email ?? '',
        [Validators.required, Validators.email],
      ],
      first_name: [this.existingUser?.first_name ?? '', [Validators.required]],
      last_name: [this.existingUser?.last_name ?? '', [Validators.required]],
      office_id: [
        this.existingUser?.office_id ?? '',
        [Validators.required, Validators.min(1)],
      ],
    });

    if (this.existingUser) {
      group.addControl(
        'role_id',
        new FormControl(this.existingUser.role_id, [Validators.required])
      );
    } else {
      group.addControl(
        'birthdate',
        new FormControl(null, [Validators.required])
      );
      group.addControl(
        'password',
        new FormControl(null, [Validators.required])
      );
    }
    return group;
  }

  private async getRolesProp(): Promise<role[]> {
    return firstValueFrom<role[]>(this.roleService.getRoles());
  }
}
