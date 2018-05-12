import { NgModule } from '@angular/core';
import { IncomesRoutingModule } from './incomes-routing.module';
import { MainIncomesComponent } from './main-incomes/main-incomes.component';
import {ViewsModule} from '../views.module';
import {ViewsCommonsModule} from '../views-commons.module';
import {AllViewsCommonsModule} from '../all-views-commons.module';

@NgModule({
  declarations: [
    MainIncomesComponent,
  ],
  imports: [
    IncomesRoutingModule,
    ViewsModule,
    ViewsCommonsModule,
    AllViewsCommonsModule
  ],
  providers: [],
  bootstrap: [MainIncomesComponent]
})
export class IncomesModule { }
