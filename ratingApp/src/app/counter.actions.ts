import { createAction, props } from '@ngrx/store';
import  *  as  data  from  'src/assets/json/books.json';


export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const random = createAction('Random');

export const jumpTo = createAction('JumpTo',


    props<{ num: number}>()
);


// Action to get json data
export const getJsonData = createAction('GetJsonData',

    props<{ data: any[] }>()
);



