import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsignaComponent } from './consigna/consigna.component';
import { TodosComponent } from './todos/todos.component';
import { TodosDetailsComponent } from './todos-details/todos-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'consigna', component: ConsignaComponent },
  { path: 'todo/:id', component: TodosDetailsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
