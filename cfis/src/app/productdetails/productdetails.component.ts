import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productId: any;
  product: any;
  isAdmin = false;
  addReview = false;
  counter = 100;
  reviewForm = this.formBuilder.group({
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.email
    ]),
    review: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    mobileNumber: new FormControl('',[
      Validators.pattern('[- +()0-9]{10,}')
       
    ])  
  });

  constructor(private param: ActivatedRoute,
    private service: DataService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (localStorage.getItem('admin') == 'true') {
      this.isAdmin = true;
    }
    this.productId = this.param.snapshot.paramMap.get('id');
    if (this.productId) {
      this.product = this.service.get_static(this.productId);
       //this.service.get(this.productId).subscribe(res=>{this.product = res;})
    }
  }

  submitReview() {
    if (!this.reviewForm.valid) {
      alert("Please enter valid Data.");
      return;
    }
    let tempReview = { ...this.reviewForm.value, id: this.counter++ }
    this.product.productReviews.push(tempReview);
    this.addReview = !this.addReview;
    this.reviewForm.reset();

  }

  deleteReview(id: any) {
    let index = this.product.productReviews.findIndex(x => x.id == id);
    this.product.productReviews.splice(index, 1);
  }
}
