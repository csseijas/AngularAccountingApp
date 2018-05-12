import { NgModule } from '@angular/core';
import { BenefitsRoutingModule } from './benefits-routing.module';
import { MainBenefitsComponent } from './main-benefits/main-benefits.component';
import { AccountingDonutChartComponent} from '../../lib/accounting-donut-chart/accounting-donut-chart.component';
import { CommonModule } from '@angular/common';
import {ViewsCommonsModule} from '../views-commons.module';

@NgModule({
  declarations: [
    MainBenefitsComponent
  ],
  imports: [
    BenefitsRoutingModule,
    CommonModule,
    ViewsCommonsModule
  ],
  providers: [],
  bootstrap: [MainBenefitsComponent]
})
export class BenefitsModule { }
