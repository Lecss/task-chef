import { Task } from './../components/TaskListItem';
import { ADD_NEW_TASK, DONE_TASK, EDIT_TASK, EDIT_TASK_DONE } from './actions';

export const TASK_STATUS_COMPLETE = 'complete';
export const TASK_STATUS_ACTIVE = 'active';

export const getTasks = (state: any) => { 
    return state.tasks;
};

const getTaskById = (state: any, id: string): Task => {
    return state.filter((x: Task) => x.id === id)[0];
}; 

export const tasksReducer = (state = [], action: any) => {
    let newTasks: Task[];
    let task: Task;

    switch (action.type) { 
        case ADD_NEW_TASK:
            return [{
                title: action.value, 
                id: action.id, 
                createdAt: action.createdAt, 
                status: action.status,
                isEdit: false
            }, ...state];

        case DONE_TASK:
            newTasks = state.slice(0);
            task = getTaskById(newTasks, action.id);
            task.status = TASK_STATUS_COMPLETE;
            return [...newTasks];

        case EDIT_TASK:
            newTasks = state.slice(0);
            task = getTaskById(newTasks, action.id);
            task.isEdit = true;
            task.title = action.value;

            return [...newTasks];
        
        case EDIT_TASK_DONE: 
            newTasks = state.slice(0);
            task = getTaskById(newTasks, action.id);
            task.isEdit = false;
            return [...newTasks];

        default:
            return state;
    }
};