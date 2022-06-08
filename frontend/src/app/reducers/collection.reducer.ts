import { createReducer, on } from '@ngrx/store';
import { loadTodoListSuccess } from '../todo.actions';
import { TodoPayload } from '../models/todo.model';
 
// export const applicationFeatureKey = 'application';

export interface State {
  todoPayload: TodoPayload;
}

export const initialState: State = {
  todoPayload: null
};

export function reducer(state = initialState, action: any): State {
  // const applicationsService = new ApplicationsService();
  switch (action.type) {
    case loadTodoListSuccess:
      const todo: TodoPayload = action.payload;
      // let tasksGroups = applicationsService.
      // buildTasksGroupsWithAppVersiontasks(engageAppdetailled.questionnaires, engageAppdetailled.questions);
      // tasksGroups = applicationsService.linkTasksWithTasksGroups(tasksGroups);
      // engageAppdetailled.questionnaires = tasksGroups;
      return {
        ...state,
        todoPayload: todo
      };

    default:
      return state;
  }
}