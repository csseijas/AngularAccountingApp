import { NgModule } from '@angular/core';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { MainExpensesComponent } from './main-expenses/main-expenses.component';
import {ViewsModule} from '../views.module';
import {ViewsCommonsModule} from '../views-commons.module';

@NgModule({
  declarations: [
    MainExpensesComponent,
  ],
  imports: [
    ExpensesRoutingModule,
    ViewsModule,
    ViewsCommonsModule
  ],
  providers: [],
  bootstrap: [MainExpensesComponent]
})
export class ExpensesModule { }
