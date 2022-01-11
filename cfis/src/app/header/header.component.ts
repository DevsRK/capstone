import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  constructor(private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getLoginEmitter()
      .subscribe(item => this.validateUser());
    this.validateUser();
  }

  logout() {
    localStorage.removeItem('admin');
    this.router.navigate(['/home']);
    this.validateUser();
  }

  validateUser() {
    if (localStorage.getItem('admin') == 'true') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

}
