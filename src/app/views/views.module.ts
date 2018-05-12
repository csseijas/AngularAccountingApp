import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonBtnsTemplateComponent } from '../lib/common-btns-template/common-btns-template.component';
import { CommonGridViewComponent } from '../lib/common-grid-view/common-grid-view.component';
import { CommonFormComponent } from '../lib/common-form/common-form.component';
import { AccountingDonutChartComponent} from '../lib/accounting-donut-chart/accounting-donut-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatRadioModule } from '@angular/material';
import { MatDividerModule, MatFormFieldModule, MatTableModule, MatInputModule, MatSortModule, MatPaginatorModule } from '@angular/material';


@NgModule({
  declarations: [
    CommonBtnsTemplateComponent,
    CommonFormComponent,
    CommonGridViewComponent
  ],
  imports: [
    CommonModule,
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
    MatRadioModule
  ],
  providers: [],
  exports: [
    CommonBtnsTemplateComponent,
    CommonFormComponent,
    CommonGridViewComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: []
})
export class ViewsModule { }
