import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as action from "./counter.actions";



@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: []
})
export class RatingComponent implements OnInit {
 
    count$: Observable<number>;
    listItems$: Observable<any[]>;
  
    constructor(private store: Store<{count: number}> ) {   }
  
    
    ngOnInit() {
  
      this.count$ = this.store.pipe(select('count'));
      
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

}
