import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatingComponent} from './components/rating/rating.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
