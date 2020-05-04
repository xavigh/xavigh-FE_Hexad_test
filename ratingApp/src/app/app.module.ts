import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';


import { RatingComponent } from './components/rating/rating.component';




@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavbarComponent,
    RatingComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
