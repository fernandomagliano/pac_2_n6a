import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.scss']
})
export class TodosDetailsComponent {
  todo: Todo | undefined;

  constructor(private route: ActivatedRoute, private todoService: TodosService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.todoService.getTodoById(id).subscribe(todo => this.todo = todo);
  }
}
