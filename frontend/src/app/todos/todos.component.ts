import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { afterNextRender, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { TodosService } from '../services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { TodoPayload, TodoPayloadUpdateContent, TodoPayloadUpdateStatus, TodoPayloadUpdateTitle } from 'src/app/models/todo.model';

@Component({
    selector: '.app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
    standalone: false
})

export class TodosComponent implements OnInit {

  tab = 0;
  todosArray: TodoPayload[] = [];

  @ViewChildren('titletextarea')
  titleTextareas!: QueryList<ElementRef<HTMLTextAreaElement>>;

  @ViewChildren('contenttextarea')
  contentTextareas!: QueryList<ElementRef<HTMLTextAreaElement>>;

  constructor (
    private route: ActivatedRoute,
    private todosService: TodosService, 
  ){}

  ngOnInit(): void {
    if (this.tab == 0) {
      this.tab = 3;
      this.getAllTodos();
    }

    if (this.tab == 1) {
      this.tab = 1;
      this.getTodos();
    }

    if (this.tab == 2) {
      this.tab = 2;
      this.getDoneTasks();
    }

    if (this.tab == 3) {
      this.tab = 3;
      this.getAllTodos();
    }

    this.todosService.todoCreated$.subscribe({
      next: (todo) => {
        this.todosArray.push(todo);
      }
    });
   }

  changeTab(index: number) {
    switch (index) {
      // Tab 1 : get the on-going to-dos list
      case 1 :
          this.tab = 1;
          this.getTodos();
          // console.log("originally", this.tab)

          break;
        // Tab 2 : get the done to-dos list
        case 2:
          this.tab = 2;
          this.getDoneTasks();
          // console.log("originally", this.tab)

          break;
        // Tab 3 : get all to-dos
        case 3:
          this.tab = 3;
          this.getAllTodos();
          // console.log("originally", this.tab)

          break;
        default:
          console.log("Oops");
    }
  }

  getTodos() {
    this.todosService.getTodoTasks().subscribe((results) => {
      this.todosArray = results;

      
    });
  }

  getDoneTasks() {
    this.todosService.getDoneTasks().subscribe((results) => {
      this.todosArray = results;

      
    });
  }


  getAllTodos() {
  this.todosService.getAllTodos().subscribe(results => {
    this.todosArray = results;

    setTimeout(() => {
      this.titleTextareas.forEach(textarea => {
        this.autoResize(textarea.nativeElement);
      });
      this.contentTextareas.forEach(textarea => {
        this.autoResize(textarea.nativeElement);
      });
    }, 0);
    
  });
}

  onCheckboxChange(id: string, isDone: boolean) {
    const body: TodoPayloadUpdateStatus = {
      isDone: isDone
    };
    this.todosService.updateTodoStatus(id, body).subscribe({
      next: () => {
        this.refreshAfterChanges();
      }
   });
  }

  refreshAfterChanges() {
    switch (this.tab) {
      // Tab 1 : get the on-going to-dos list
      case 1 :
          this.getTodos();
          break;
        // Tab 2 : get the done to-dos list
        case 2:
          this.getDoneTasks();
          break;
        // Tab 3 : get all to-dos
        case 3:
          this.getAllTodos();
          break;
    }
  }

  onSubmitTitle(id: string, title: string) {
    let body: TodoPayloadUpdateTitle = {
      "title": title,
    }
    this.todosService.updateTodoTitle(id, body).subscribe();
  }

  onSubmitContent(id: string, content: string) {
    let body: TodoPayloadUpdateContent = {
      "content": content,
    }
    this.todosService.updateTodoContent(id, body).subscribe();
  }

  contentLostFocus() {
    // BUG : when immediately clicked on another input, alert box loops over and over again
    // console.log("Don't forget to press on ENTER to save changes!")
  }

  autoResize(textarea: HTMLTextAreaElement): void {
    textarea.style.height = '0px';
    textarea.style.height = `${textarea.scrollHeight}px`;
}
  
  deleteTodos(id: string) {
    this.todosService.deleteTodos(id).subscribe(() => {
      this.refreshAfterChanges();
      this.todosService.decrementTodosCount();
    });
  }
}
