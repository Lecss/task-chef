
import * as React from 'react';
import TaskListItem, { Task } from './TaskListItem';

export interface TaskListProps {
    tasks: Task[];
    onTaskDone: (taskId: string) => void;
}

export default class TaskList extends React.Component<TaskListProps> {

    render() {
        return (
            <ul> {this.props.tasks.map(x => {
                return <TaskListItem
                    task={x}
                    key={x.id}
                    onTaskDone={this.props.onTaskDone}
                />;
            })}
            </ul>
        );
    }
}