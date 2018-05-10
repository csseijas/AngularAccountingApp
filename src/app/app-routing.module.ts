import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { NotFoundComponent } from "./lib/not-found-component/not-found-component.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "incomes",
    loadChildren: "./views/incomes/incomes.module#IncomesModule"
  },
  {
    path: "expenses",
    loadChildren: "./views/expenses/expenses.module#ExpensesModule"
  },
  {
    path: "benefits",
    loadChildren: "./views/benefits/benefits.module#BenefitsModule"
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
