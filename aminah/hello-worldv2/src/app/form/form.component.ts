import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // name = new FormControl('');

  namePattern = "^[a-zA-Z ]*$";
  numberPattern = "^[0-9]*$";
  productPattern = "^[a-zA-Z0-9]+$"

  detailsForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(this.namePattern)]],
    lastName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(this.namePattern)]],
    phoneNo: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(this.numberPattern)]],
    accountNo: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(this.numberPattern)]],
    productCode: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(this.productPattern)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
