import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule } from '@angular/material';
import { IncomesRoutingModule } from './incomes-routing.module';
import { MainIncomesComponent } from './main-incomes/main-incomes.component';


@NgModule({
  declarations: [
    MainIncomesComponent
  ],
  imports: [
    IncomesRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [MainIncomesComponent]
})
export class IncomesModule { }
