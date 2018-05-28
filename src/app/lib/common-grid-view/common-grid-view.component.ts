import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountingData } from '../../interfaces/accountingData.interface';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'accounting-common-grid-view',
  templateUrl: './common-grid-view.component.html',
  styleUrls: ['./common-grid-view.component.scss']
})
export class CommonGridViewComponent implements OnInit {

  displayedColumns = ['id', 'name', 'amount', 'edit', 'delete'];
  accountingDataTable: MatTableDataSource<AccountingData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const accountingDataArray: AccountingData [] = [
      { 'id': 0, 'name': 'fasferhgerhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', 'amount': 241},
      { 'id': 1, 'name': 'Reaehrhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdy', 'amount': 241 },
      { 'id': 2, 'name': 'Stherrjtyjfewgwerghehrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrt', 'amount': 24893 }];
    this.accountingDataTable = new MatTableDataSource(accountingDataArray);
  }

  ngOnInit() {
    this.accountingDataTable.paginator = this.paginator;
    this.accountingDataTable.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.accountingDataTable.filter = filterValue;
  }

}







