import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { concat } from 'rxjs';
import { office } from 'src/app/models/office';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'components-modules-office-select-office',
  templateUrl: './select-office.component.html',
  styleUrls: ['./select-office.component.css'],
})
export class SelectOfficeComponent implements OnInit {
  officeList: Array<office> = [];
  public selectedOfficeId: number = 0;
  @Input() class: Iterable<string> = [];
  @Input() hasAllSelector: boolean = false;
  @Output() public selectedOfficeChange = new EventEmitter<number>();

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getAsync('offices').subscribe((x) => {
      this.officeList = x;

      if (this.hasAllSelector) {
        let allOffice: office = {
          id: 0,
          title: 'All Country',
        };

        this.officeList = [allOffice, ...this.officeList];
      }

      this.class = [...this.class, 'select', 'border-primary', 'w-full'];
    });
  }

  onChange(event: number): void {
    this.selectedOfficeChange.emit(event);
  }
}
