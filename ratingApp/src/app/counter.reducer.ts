import { createReducer, on } from '@ngrx/store';
import * as  states  from '../app/counter.actions';
import  *  as  data  from  'src/assets/json/books.json';
 
export const initialState = 0;
 
const _counterReducer = createReducer(initialState,
  on(states.increment, state => state + 1),
  on(states.decrement, state => state - 1),
  on(states.random, state => Math.floor(Math.random() * 100 )),
  on(states.jumpTo, (state, { num }) => num )
 
  
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

// Get Json data
const _jsonReducer = createReducer(initialState,
  on( states.getJsonData, ( state =>  state + data['default'] ))
);

export function jsonReducer(state, action) {
  return _jsonReducer(state, action);
}



