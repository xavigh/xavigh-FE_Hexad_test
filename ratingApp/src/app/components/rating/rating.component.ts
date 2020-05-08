import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as action from "./../../counter.actions";
import { jsonData } from 'src/app/counter.reducer';

import {Router} from "@angular/router"



@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: []
})
export class RatingComponent implements OnInit {
 
    count$: Observable<number>;
    data$: Observable<any[]>;
  
    constructor(private store: Store<{count: number}>, private store2: Store<{ data: any[]}> , private router: Router) {   }
  
    
    ngOnInit() {
      this.count$ = this.store.pipe(select('count'));
      this.data$ = this.store2.pipe(select('data'));
      
      
    }  
            increment() {
              this.store.dispatch(action.increment());
            }
            decrement() {
              this.store.dispatch(action.decrement());
            }
            random() {
              this.store.dispatch(action.random());
            }
            jumpTo(varnum: number ) {
              this.store.dispatch(action.jumpTo({num: varnum}));
            }

            //Get json data
            getJsonData(data: any[] ) {
              this.store2.dispatch(action.getJsonData({ jsonData: data}));
              console.log(jsonData);
              
            }

}
