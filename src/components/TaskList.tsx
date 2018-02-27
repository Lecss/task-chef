
import * as React from 'react';
import TaskListItem, { Task } from './TaskListItem';
import { markTaskDone, markTaskEdit, markTaskEditDone } from '../containers/actions';
import { connect } from 'react-redux';

export interface TaskListProps {
    tasks: Task[];
    onTaskDone: (taskId: string) => void;
    onTaskEdit: (taskId: string, value: string) => void;
    onTaskEditDone: (taskId: string) => void;
}

class TaskList extends React.Component<TaskListProps> {

    render() {
        return (
            <ul> {this.props.tasks.map(x => {
                return <TaskListItem
                    task={x}
                    key={x.id}
                    onTaskDone={this.props.onTaskDone}
                    onTaskEdit={this.props.onTaskEdit}
                    onTaskEditDone={this.props.onTaskEditDone}
                />;
            })}
            </ul>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onTaskDone: (taskId: string) => dispatch(markTaskDone(taskId)),
        onTaskEdit: (taskId: string, value: string) => dispatch(markTaskEdit(taskId, value)),
        onTaskEditDone: (taskId: string) => dispatch(markTaskEditDone(taskId))
    };
};

const TasksComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

export default TasksComponent; 