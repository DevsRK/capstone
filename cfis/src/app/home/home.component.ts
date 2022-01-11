import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: DataService) { }

  products: any;

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = this.service.getAll_static();
    // this.service.getAll().subscribe(res=>{console.log(res);
    // this.products=res;
    // });
  }
}

