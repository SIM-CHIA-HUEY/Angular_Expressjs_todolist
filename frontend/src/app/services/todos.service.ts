import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoPayloadAddNew, TodoPayloadUpdateContent, TodoPayloadUpdateStatus, TodoPayloadUpdateTitle } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:3001`

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

}
