import { createAction, props } from '@ngrx/store';


export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const random = createAction('Random');
export const jumpTo = createAction('JumpTo',

    props<{num: number}>()
);