
import * as React from 'react';
import { TASK_STATUS_COMPLETE, TASK_STATUS_ACTIVE } from '../containers/state';

export interface Task {
    id: string;
    description: string;
    title: string;
    status: string;
    createdAt: number;
    isEdit: boolean;
}

export interface TaskListItemProps {
    task: Task;
    onTaskDone: (taskId: string) => void;
    onTaskEdit: (taskId: string, value: string) => void;
    onTaskEditDone: (taskId: string) => void;
}

class TaskListItem extends React.Component<TaskListItemProps> {

    canEditItem = () => {
        return this.props.task.status === TASK_STATUS_ACTIVE;
    }

    render() {
        return (
            <li className="list-item">
                <div className="task-details">
                    {!this.props.task.isEdit && <h3
                        className={this.props.task.status === TASK_STATUS_COMPLETE ?
                            'task-complete' : 'task-active'}
                    > {this.props.task.title}
                    </h3>
                    }

                    {this.props.task.isEdit && <input
                        type="text"
                        className={'title-edit'}
                        defaultValue={this.props.task.title}
                        onChange={(event) => this.props.onTaskEdit(this.props.task.id, event.target.value)}
                        onBlur={() => this.props.onTaskEditDone(this.props.task.id)}
                    />}

                    <p> {this.props.task.description}</p>
                    <i> added on: {new Date(this.props.task.createdAt).toString()} </i>
                </div>
                <div className="task-controls">
                    {this.canEditItem() && <button
                        onClick={() => this.props.onTaskEdit(this.props.task.id, this.props.task.title)}
                    > Edit
                    </button>
                    }
                    {this.canEditItem() && <button
                        onClick={() => this.props.onTaskDone(this.props.task.id)}
                    >Done
                    </button>
                    }
                </div>
            </li>
        );
    }
}

export default TaskListItem; 