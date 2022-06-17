import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoPayloadAddNew, TodoPayloadUpdateStatus } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:5000/api`

  // Todos
  getAllTodos(): Observable<any> {
    return this.http.get(`${this.baseURL}/todos`) as Observable<any>;
  }

  getTodoById(id: string): Observable<any> {
    return this.http.get(`${this.baseURL}/todos/${id}`) as Observable<any>;
  }

  getTodoTasks(): Observable<any> {
    return this.http.get(`${this.baseURL}/ongoing`) as Observable<any>;
  }

  getDoneTasks(): Observable<any> {
    return this.http.get(`${this.baseURL}/done`) as Observable<any>;
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

}
