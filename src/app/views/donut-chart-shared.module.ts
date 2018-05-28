import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AccountingDonutChartComponent} from '../lib/accounting-donut-chart/accounting-donut-chart.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AccountingDonutChartComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    AccountingDonutChartComponent,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: []
})
export class DonutChartSharedModule { }
