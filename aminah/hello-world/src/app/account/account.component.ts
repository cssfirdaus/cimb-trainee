import { Component, OnInit } from '@angular/core';
import { Account } from '../account-interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountDetails: Account[]=[
    {
      acctype: 'Current Account',
      accTypeDesc: null,
		  productType: "CA FLEXI",
		  accNumber: "8005073726",
		  accStatus: "Active",
		  amount: -394447.35,
		  currencyCode: "MYR"
     },
     {
      acctype: "Current Account",
		  accTypeDesc: null,
  	  productType: "BASIC CA WITHOUT FEE",
	  	accNumber: "8006826243",
    	accStatus: "Active",
	  	amount: 39220.76,
    	currencyCode: "MYR"
     },
     {
      acctype: "Savings Account",
      accTypeDesc: null,
      productType: "Air Asia Savers",
      accNumber: "8006890715",
      accStatus: "Dormant",
      amount: 380.21,
      currencyCode: "MYR"
     },
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
