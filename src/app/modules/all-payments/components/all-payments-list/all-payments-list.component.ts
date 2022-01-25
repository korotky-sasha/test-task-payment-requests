import { Component, OnInit } from '@angular/core';
import { Payment }           from '../../../../models';

@Component({
  selector: 'app-all-payments-list',
  templateUrl: './all-payments-list.component.html',
  styleUrls: ['./all-payments-list.component.scss']
})
export class AllPaymentsListComponent implements OnInit {
  payments: Payment[] = [
    {
      name: "Meredith Palm",
      money_value: "$123.45",
      status: "draft",
      date_info: "2/28/2022",
      due_date: "Due on Feb 2, 2022",
      hash_number: "#2056",
      service_info: "Whole Home Speaker Install"
    },
    {
      name: "Maxamiliano Montgomery",
      money_value: "$123.45",
      status: "submitted",
      date_info: "2/28/2022",
      due_date: "Due on Jan 29, 2022",
      hash_number: "#2056",
      service_info: "Whole Home Speaker Install"
    },
    {
      name: "Maxamiliano Montgomery",
      money_value: "$123.45",
      status: "submitted",
      date_info: "2/28/2022",
      due_date: "Past Due by 15 Days",
      hash_number: "#2056",
      service_info: "Whole Home Speaker Install"
    },
    {
      name: "Maxamiliano Montgomery",
      money_value: "$123.45",
      status: "paid",
      date_info: "2/28/2022",
      due_date: "Stripe Funding on Tuesday",
      hash_number: "#2056",
      service_info: "Whole Home Speaker Install"
    },
    {
      name: "Tobias Flenderson",
      money_value: "$123.45",
      status: "viewed",
      date_info: "2/28/2022",
      due_date: "Due on Jan 3, 2022",
      hash_number: "#2056",
      service_info: "Whole Home Speaker Install"
    },
    {
      name: "Maxamiliano Montgomery",
      money_value: "$123.45",
      status: "paid",
      date_info: "2/28/2022",
      due_date: "Funded by Stripe on Jan 20, 2022",
      hash_number: "#2056",
      service_info: "Whole Home Speaker Install"
    },
    {
      name: "Gabriel Susan Lewis",
      money_value: "$123.45",
      status: "declined",
      date_info: "2/28/2022",
      due_date: "Due - Dec 30, 2022",
      hash_number: "#2056",
      service_info: "Whole Home Speaker Install"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
