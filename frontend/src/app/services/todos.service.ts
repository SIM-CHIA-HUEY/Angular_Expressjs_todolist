import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:5000/api`

  getAllTodos(): Observable<any> {
    return this.http.get(`${this.baseURL}/todos`)
  }

  addTodo(data:any): Observable<any> {
    return this.http.post(`${this.baseURL}/todos`,data)
  }

}
