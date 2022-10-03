import { HttpParams } from '@angular/common/http';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { user } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'components-modules-user-datatable-user',
  templateUrl: './datatable-user.component.html',
  styleUrls: ['./datatable-user.component.css'],
})
export class DatatableUserComponent implements OnInit {
  @Input() officeId: number = 0;
  users: Array<user> = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getAsync('users').subscribe((x) => (this.users = x));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['officeId']) {
      let params = new HttpParams().append(
        'office_id',
        changes['officeId'].currentValue
      );

      this.http
        .getAsync('users?' + params.toString())
        .subscribe((x) => (this.users = x));
    }
  }
}
