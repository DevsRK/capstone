import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsurveyComponent } from './productsurvey.component';

describe('ProductsurveyComponent', () => {
  let component: ProductsurveyComponent;
  let fixture: ComponentFixture<ProductsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
