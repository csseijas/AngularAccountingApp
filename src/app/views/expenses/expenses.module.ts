import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule } from '@angular/material';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { MainExpensesComponent } from './main-expenses/main-expenses.component';


@NgModule({
  declarations: [
    MainExpensesComponent
  ],
  imports: [
    ExpensesRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [MainExpensesComponent]
})
export class ExpensesModule { }
