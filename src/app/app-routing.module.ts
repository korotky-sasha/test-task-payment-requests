import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabPlaceholderComponent } from './components/tab-placeholder/tab-placeholder.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'all-payments' },
  {
    path: 'all-payments',
    loadChildren: () =>
      import('./modules/all-payments/all-payments.module').then(
        (m) => m.AllPaymentsModule
      ),
  },
  { path: 'outstanding', component: TabPlaceholderComponent },
  { path: 'paid', component: TabPlaceholderComponent },
  { path: 'more', component: TabPlaceholderComponent },
  { path: 'more/archived', component: TabPlaceholderComponent },
  { path: 'more/received-payments', component: TabPlaceholderComponent },
  { path: 'more/stripe-funding', component: TabPlaceholderComponent },
  { path: '**', redirectTo: 'all-payments' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
