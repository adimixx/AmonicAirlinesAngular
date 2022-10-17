import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
export class FormUpsertUserComponent implements OnInit, OnDestroy {
  @Input() existingUser?: user;
  form!: FormGroup;
  propRoles: role[] = [];

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private userService: UserService,
    private roleService: RoleService
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.form = this.fb.group({
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
      birthdate: [this.existingUser?.birthdate ?? '', [Validators.required]],
      password: ['', [Validators.required]],
    });

    if (this.existingUser != null) {
      this.roleService.getRoles().subscribe((x) => {
        this.propRoles = x;
        console.log(this.propRoles);
      });
      this.form.addControl(
        'role_id',
        new FormControl(this.existingUser.role_id, [Validators.required])
      );
    }

    this.modalService.modalSubject.subscribe((x) => {
      if (!x && this.form.dirty) {
        this.form.reset();
      }
    });
  }

  onSubmit(): void {
    if (this.form.status == 'VALID') {
      let data = this.form.value;
      this.userService
        .createUser(data)
        .then((x) => this.modalService.closeModal());
    }
  }

  onCancelBtnClicked(): void {
    this.modalService.closeModal();
  }

  validateInputError(key: string): boolean {
    return this.form.controls[key]?.touched && this.form.controls[key].invalid;
  }

  selectedOfficeChange(value: number) {
    this.form.controls['office_id']?.setValue(value);
  }
}
