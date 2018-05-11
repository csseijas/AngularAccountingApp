import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule } from '@angular/material';
import { BenefitsRoutingModule } from './benefits-routing.module';
import { MainBenefitsComponent } from './main-benefits/main-benefits.component';
import {AccountingDonutChartComponent} from '../../lib/accounting-donut-chart/accounting-donut-chart.component';


@NgModule({
  declarations: [
    MainBenefitsComponent,
    AccountingDonutChartComponent
  ],
  imports: [
    BenefitsRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [MainBenefitsComponent]
})
export class BenefitsModule { }
