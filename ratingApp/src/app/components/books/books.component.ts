import { Component, OnInit } from '@angular/core';
import  *  as  data  from  'src/assets/json/books.json';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: any = {};

  constructor( ) { 
  
   console.log(data['default']);
    this.books = data['default'];
   
  }
}
