import { TASK_STATUS_ACTIVE } from './state';
export const ADD_NEW_TASK = 'tasks/ADD_NEW_TASK';
export const DONE_TASK = 'tasks/DONE_TASK';

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