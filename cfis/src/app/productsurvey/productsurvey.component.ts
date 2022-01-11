import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-productsurvey',
  templateUrl: './productsurvey.component.html',
  styleUrls: ['./productsurvey.component.css']
})
export class ProductsurveyComponent implements OnInit {

  surveyForm = this.formBuilder.group({
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.email
    ]),
    mobileNumber: new FormControl('',[
      Validators.pattern('[- +()0-9]{10,}')
       
    ])  
  });

  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  submitSurvey() {
    if (!this.surveyForm.valid) {
      alert("Please enter valid Data.");
      return;
    }
  }
}
