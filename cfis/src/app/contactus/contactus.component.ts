import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm = this.formBuilder.group({
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.email
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),   
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    if (!this.contactForm.valid) {
      alert("Please enter valid Data.");
      return;
    }
  }
}
