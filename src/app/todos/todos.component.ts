import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {

  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  searchTerm: string = '';


  constructor(private todosService: TodosService, private router: Router){}


  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.filteredTodos = todos;
    });
  }

  onSearchTermChange(): void {
    if (!this.searchTerm) {
      this.filteredTodos = this.todos;
    }
  }

  searchTodos(): void {
    this.filteredTodos = this.todos.filter(todo =>
      todo.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewDetail(id: number): void {
    this.router.navigate(['/todo', id]);
  }
}
