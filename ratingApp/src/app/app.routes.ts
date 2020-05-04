import { Routes } from "@angular/router";


import { BooksComponent } from './components/books/books.component';


export const ROUTES: Routes = [
  
  { path: "books/:id", component: BooksComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
