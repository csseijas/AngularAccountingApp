import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'countability-menu',
  templateUrl: './countability-menu.component.html',
  styleUrls: ['./countability-menu.component.scss']
})
export class CountabilityMenuComponent implements OnInit {

  constructor() { }
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  ngOnInit() {
  }

  menu() {
    this.trigger.openMenu();
  }
}

