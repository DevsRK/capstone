import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    if (!this.loginForm.valid) {
      alert("Please fill all fields");
      return;
    }

    if (this.loginForm.value['username'] == 'admin@test.com' && this.loginForm.value['password'] == 'admin') {
      localStorage.setItem('admin', 'true');
      this.router.navigate(['/home']);
      this.dataService.emitLoginEvent();
    } else {
      alert('Incorrect username or password');
    }
  }
}
