import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule } from '@angular/material';
import { BenefitsRoutingModule } from './benefits-routing.module';
import { MainBenefitsComponent } from './main-benefits/main-benefits.component';


@NgModule({
  declarations: [
    MainBenefitsComponent
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
