import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer-interface';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerDetails: Customer ={
    name: 'Abdul Samad',
    nric: '880702148823', 
    branch:'Menara Bumiputra Commerce'
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}