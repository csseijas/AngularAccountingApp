import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainIncomesComponent } from './main-incomes/main-incomes.component';



const routes: Routes = [
  {
    path: "",
    component: MainIncomesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomesRoutingModule { }
