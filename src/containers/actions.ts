import { TASK_STATUS_ACTIVE } from './state';
export const ADD_NEW_TASK = 'tasks/ADD_NEW_TASK';
export const DONE_TASK = 'tasks/DONE_TASK';
export const EDIT_TASK = 'tasks/EDIT_TASK';
export const EDIT_TASK_DONE = 'tasks/EDIT_TASK_DONE';

export const addNewTask = (value: string) => { 
    return {
        type: ADD_NEW_TASK,
        id: +Date.now(),
        value,
        createdAt: +Date.now(),
        status: TASK_STATUS_ACTIVE
    };
};

export const markTaskDone = (taskId: string) => { 
    return {
        type: DONE_TASK,
        id: taskId
    };
};

export const markTaskEdit = (taskId: string, value: string) => { 
    return {
        type: EDIT_TASK,
        id: taskId,
        value
    };
};

export const markTaskEditDone = (taskId: string) => { 
    return {
        type: EDIT_TASK_DONE,
        id: taskId
    };
};