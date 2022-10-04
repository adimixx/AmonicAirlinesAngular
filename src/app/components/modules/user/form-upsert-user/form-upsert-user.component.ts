import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/models/user.service';
import { ModalService } from 'src/app/services/ui/modal.service';

@Component({
  selector: 'components-modules-user-form-upsert-user',
  templateUrl: './form-upsert-user.component.html',
  styleUrls: ['./form-upsert-user.component.css'],
})
export class FormUpsertUserComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      office_id: [0, [Validators.required, Validators.min(1)]],
      birthdate: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

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
