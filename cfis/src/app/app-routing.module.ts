import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsurveyComponent } from './productsurvey/productsurvey.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'productdetails' , component: ProductdetailsComponent},
  {path: 'productsurvey' , component: ProductsurveyComponent},
  {path: 'loginpage' , component: LoginpageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'product/:id',component:ProductdetailsComponent},
  {path: 'contactus',component:ContactusComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
