import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainIncomesComponent } from './main-incomes/main-incomes.component';
import {FormViewComponent} from '../form-view/form-view.component';


const routes: Routes = [
  {
    path: '',
    component: MainIncomesComponent
  },
  {
    path: 'form/create',
    component: FormViewComponent
  },
  {
    path: 'form/edit/:id',
    component: FormViewComponent
  },
  {
    path: 'form/delete/:id',
    component: FormViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomesRoutingModule { }
