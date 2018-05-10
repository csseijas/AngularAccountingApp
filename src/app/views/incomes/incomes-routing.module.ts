import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainIncomesComponent } from './main-incomes/main-incomes.component';


const routes: Routes = [
  {
    path: "",
    component: MainIncomesComponent
  },
  /*
  {
    path: "income",
    loadChildren: "./views/operations/income.module#IncomeModule"
  },
  {
    path: "expenses",
    loadChildren: "./views/operations/expenses.module#ExpensesModule"
  },
  {
    path: "benefits",
    loadChildren: "./views/operations/benefits.module#BenefitsModule"
  }
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomesRoutingModule { }
