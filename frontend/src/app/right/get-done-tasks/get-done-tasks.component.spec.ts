import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDoneTasksComponent } from './get-done-tasks.component';

describe('GetDoneTasksComponent', () => {
  let component: GetDoneTasksComponent;
  let fixture: ComponentFixture<GetDoneTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDoneTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDoneTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
