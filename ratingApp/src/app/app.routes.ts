import { Routes } from "@angular/router";


import { BooksComponent } from './components/books/books.component';
import { RatingComponent } from './components/rating/rating.component';


export const ROUTES: Routes = [
  
  { path: "books", component: BooksComponent },
  { path: "rating", component: RatingComponent },
  

  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
