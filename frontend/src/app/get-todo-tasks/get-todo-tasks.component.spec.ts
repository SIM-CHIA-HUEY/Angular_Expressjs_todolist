import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTodoTasksComponent } from './get-todo-tasks.component';

describe('GetTodoTasksComponent', () => {
  let component: GetTodoTasksComponent;
  let fixture: ComponentFixture<GetTodoTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTodoTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTodoTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
