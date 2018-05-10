import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'accounting-header',
  templateUrl: './accounting-header.component.html',
  styleUrls: ['./accounting-header.component.scss']
})
export class AccountingHeaderComponent implements OnInit {

  constructor() { }
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  ngOnInit() {
  }

  menu() {
    this.trigger.openMenu();
  }
}

