import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainExpensesComponent } from './main-expenses/main-expenses.component';
import {FormViewComponent} from '../form-view/form-view.component';



const routes: Routes = [
  {
    path: "",
    component: MainExpensesComponent
  },
  {
    path: "form/create",
    component: FormViewComponent
  },
  {
    path: "form/edit/:id",
    component: FormViewComponent
  },
  {
    path: "form/delete/:id",
    component: FormViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
