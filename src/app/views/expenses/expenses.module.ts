import { NgModule } from '@angular/core';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { MainExpensesComponent } from './main-expenses/main-expenses.component';
import {FormViewSharedModule} from '../form-view-shared.module';
import {AllViewsCommonsModule} from '../all-views-commons.module';
import {DonutChartSharedModule} from '../donut-chart-shared.module';

@NgModule({
  declarations: [
    MainExpensesComponent,
  ],
  imports: [
    ExpensesRoutingModule,
    DonutChartSharedModule,
    AllViewsCommonsModule,
    FormViewSharedModule
  ],
  providers: [],
  bootstrap: [MainExpensesComponent]
})
export class ExpensesModule { }
