import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';


  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }
}
