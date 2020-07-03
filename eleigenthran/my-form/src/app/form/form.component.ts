import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    accno: ['', Validators.required],
    productcode: ['', Validators.required],
    phoneno: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {
    
  }
  
  ngOnInit(): void {
  }
}
