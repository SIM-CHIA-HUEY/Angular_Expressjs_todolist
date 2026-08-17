import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { TodoPayload, TodoPayloadAddNew, TodoPayloadUpdateContent, TodoPayloadUpdateStatus, TodoPayloadUpdateTitle } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:3001`

  private todoCreatedSubject = new Subject<TodoPayload>();

  todoCreated$ = this.todoCreatedSubject.asObservable();

  private todosCountSubject = new BehaviorSubject<number>(0);

  todosCount$ = this.todosCountSubject.asObservable();

  // Todos
  getAllTodos(): Observable<any> {
    return this.http.get(`${this.baseURL}/todos`) as Observable<any>;
  }

  getTodoById(id: string): Observable<any> {
    return this.http.get(`${this.baseURL}/todos/${id}`) as Observable<any>;
  }

  getTodoTasks(): Observable<any> {
    return this.http.get(`${this.baseURL}/todos/ongoing`) as Observable<any>;
  }

  getDoneTasks(): Observable<any> {
    return this.http.get(`${this.baseURL}/todos/done`) as Observable<any>;
  }

  addTodo(data:TodoPayloadAddNew): Observable<any> {
    return this.http.post(`${this.baseURL}/todos`, data) as Observable<any>;
  }

  deleteTodos(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/todos/${id}`) as Observable<any>;
  }

  updateTodoStatus(id: string, body: TodoPayloadUpdateStatus): Observable<any> {
    return this.http.patch(`${this.baseURL}/todos/${id}`, body) as Observable<any>;
  }

  updateTodoTitle(id: string, body: TodoPayloadUpdateTitle): Observable<any> {
    return this.http.patch(`${this.baseURL}/todos/${id}/title`, body) as Observable<any>;
  }

  updateTodoContent(id: string, body: TodoPayloadUpdateContent): Observable<any> {
    return this.http.patch(`${this.baseURL}/todos/${id}/content`, body) as Observable<any>;
  }

  notifyTodoCreated(todo: TodoPayload) {
    this.todoCreatedSubject.next(todo);
  }

  getTodosCountService(count: number): void {
  this.todosCountSubject.next(count);
  }

  incrementTodosCount(): void {
    this.todosCountSubject.next(
      this.todosCountSubject.value + 1
    );
  }

  decrementTodosCount(): void {
    this.todosCountSubject.next(
      Math.max(0, this.todosCountSubject.value - 1)
    );
  }

}
