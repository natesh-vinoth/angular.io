import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { Array1Component } from './array1/array1.component';
import { Array2Component } from './array2/array2.component';
import { BannerComponent } from './banner/banner.component';
import { User1Component } from './user1/user1.component';
import { Array3Component } from './array3/array3.component';
import { Array4Component } from './array4/array4.component';

const mypage : Routes = [
  {path : "home", component : HomeComponent},
  {path : "about", component : AboutComponent},
  {path : "services", component : ServicesComponent},
  {path : "contact", component : ContactComponent},
  {path : "user", component : UserComponent},
  {path : "user1", component : User1Component},
  {path : "", redirectTo : "/home", pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    UserComponent,
    Array1Component,
    Array2Component,
    BannerComponent,
    User1Component,
    Array3Component,
    Array4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(mypage),
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
