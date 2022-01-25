import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FlexModule }          from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule }     from '@angular/material/button';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatIconModule }       from '@angular/material/icon';
import { MatSelectModule }     from '@angular/material/select';

import { AllPaymentsRoutingModule } from './all-payments-routing.module';
import { AllPaymentsListComponent } from './components/all-payments-list/all-payments-list.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';


@NgModule({
  declarations: [AllPaymentsListComponent, PaymentCardComponent],
  imports: [
    CommonModule,
    AllPaymentsRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FlexModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class AllPaymentsModule {}
