import { Task } from './../components/TaskListItem';
import { ADD_NEW_TASK, DONE_TASK } from './actions';

export const TASK_STATUS_COMPLETE = 'complete';
export const TASK_STATUS_ACTIVE = 'active';

export const getTasks = (state: any) => { 
    return state.tasks;
};

export const tasksReducer = (state = [], action: any) => {
    switch (action.type) { 
        case ADD_NEW_TASK:
            return [{
                title: action.value, 
                id: action.id, 
                createdAt: action.createdAt, 
                status: action.status
            }, ...state];

        case DONE_TASK:
            const completedTask: Task = state.filter((x: Task) => x.id === action.id)[0];
            completedTask.status = TASK_STATUS_COMPLETE;

            return [...state.filter((x: Task) => x.id !== action.id), completedTask];
        default:
            return state;
    }
};