import { createReducer, on } from '@ngrx/store';
import * as  states  from './components/rating/counter.actions';
 
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