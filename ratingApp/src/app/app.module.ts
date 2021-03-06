import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RatingComponent } from './components/rating/rating.component';

//ngx-rating
import { BarRatingModule } from "ngx-bar-rating";

//ngrx 
import { StoreModule } from '@ngrx/store';
import { counterReducer} from './counter.reducer';
import { jsonReducer} from './counter.reducer';



//Routing
import { RouterModule  } from "@angular/router";
import { ROUTES } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavbarComponent,
    RatingComponent
    
    
    
    
  
  ],
  imports: [
   StoreModule,   
   BrowserModule,
   BarRatingModule,
 
   RouterModule.forRoot(ROUTES , {useHash: true }),
   StoreModule.forRoot({ count: counterReducer, data: jsonReducer})
   
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
