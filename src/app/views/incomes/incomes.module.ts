import { NgModule } from '@angular/core';
import { IncomesRoutingModule } from './incomes-routing.module';
import { MainIncomesComponent } from './main-incomes/main-incomes.component';
import {FormViewSharedModule} from '../form-view-shared.module';
import {AllViewsCommonsModule} from '../all-views-commons.module';
import {DonutChartSharedModule} from '../donut-chart-shared.module';

@NgModule({
  declarations: [
    MainIncomesComponent,
  ],
  imports: [
    IncomesRoutingModule,
    AllViewsCommonsModule,
    FormViewSharedModule,
    DonutChartSharedModule
  ],
  providers: [],
  bootstrap: [MainIncomesComponent]
})
export class IncomesModule { }
