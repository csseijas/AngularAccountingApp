import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonBtnsTemplateComponent } from '../lib/common-btns-template/common-btns-template.component';
import { CommonGridViewComponent } from '../lib/common-grid-view/common-grid-view.component';
import { AccountingDonutChartComponent} from '../lib/accounting-donut-chart/accounting-donut-chart.component';
import { MatButtonModule, MatIconModule, MatRadioModule } from '@angular/material';
import { MatDividerModule, MatFormFieldModule, MatTableModule, MatInputModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { CommonFormComponent} from '../lib/common-form/common-form.component';
import {FormViewComponent} from './form-view/form-view.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommonBtnsTemplateComponent,
    CommonGridViewComponent,
    FormViewComponent,
    CommonFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatRadioModule,
  ],
  providers: [],
  exports: [
    CommonBtnsTemplateComponent,
    CommonGridViewComponent,
    FormViewComponent,
    RouterModule,
    CommonFormComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: []
})
export class FormViewSharedModule { }
