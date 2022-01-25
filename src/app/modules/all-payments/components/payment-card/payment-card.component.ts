import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

import { Payment } from '../../../../models';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  @Input() payment?: Payment;
  statusField?: FormControl;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const formState = this.payment ? this.payment.status : ''
    this.statusField = this.formBuilder.control(formState);
  }

  getStatusClass(): string {
    return this.statusField?.value || '';
  }

}
