import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllPaymentsListComponent } from './components/all-payments-list/all-payments-list.component';

const routes: Routes = [{ path: '', component: AllPaymentsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPaymentsRoutingModule {}
