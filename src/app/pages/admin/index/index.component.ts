import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pages-admin-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public selectedOfficeId: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onSelectedOfficeIdChanged(value: number): void {
    this.selectedOfficeId = value;
  }
}
