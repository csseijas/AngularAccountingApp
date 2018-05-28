import { NgModule } from '@angular/core';
import { BenefitsRoutingModule } from './benefits-routing.module';
import { MainBenefitsComponent } from './main-benefits/main-benefits.component';
import {AllViewsCommonsModule} from '../all-views-commons.module';
import {DonutChartSharedModule} from '../donut-chart-shared.module';

@NgModule({
  declarations: [
    MainBenefitsComponent
  ],
  imports: [
    BenefitsRoutingModule,
    DonutChartSharedModule,
    AllViewsCommonsModule
  ],
  providers: [],
  bootstrap: [MainBenefitsComponent]
})
export class BenefitsModule { }
