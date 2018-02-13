import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent }       from './books/books.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';

const routes: Routes = [
  {path : '', redirectTo : '/dashboard', pathMatch : 'full'},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'detail/:uuid', component : BookDetailComponent },
  {path : 'books', component : BooksComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}

