
import * as React from 'react';
import { TASK_STATUS_COMPLETE } from '../containers/state';

export interface Task {
    id: string;
    description: string;
    title: string;
    status: string;
    createdAt: number;
}

export interface TaskListItemProps {
    task: Task;
    onTaskDone: (taskId: string) => void;
}

class TaskListItem extends React.Component<TaskListItemProps> {
    render() {
        return (
            <li className="list-item">
                <div className="task-details">
                    <h3 
                        className={this.props.task.status === TASK_STATUS_COMPLETE ? 
                            'task-complete' : 'task-active'}
                    > {this.props.task.title}
                    </h3>

                    <p> {this.props.task.description}</p>
                    <i> added on: {new Date(this.props.task.createdAt).toString()} </i>
                </div>
                <div className="task-controls">
                    <button onClick={() => this.props.onTaskDone(this.props.task.id)}>Done</button>
                </div>
            </li>
        );
    }
}

export default TaskListItem; 