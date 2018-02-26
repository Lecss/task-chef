import * as React from 'react';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import { Task } from '../components/TaskListItem';
import { connect } from 'react-redux';
import { getTasks } from './state';

import '../components/taskListItem.css';
import '../components/addTask.css';
import { markTaskDone } from './actions';

export interface TasksProps {
    tasks: Task[];
    onTaskDone: (taskId: string) => void;
}

class Tasks extends React.Component<TasksProps> {

    handleTaskRemove = (taskId: string) => { 
        this.props.onTaskDone(taskId);
    }

    render() {
        return (
            <div>
                <AddTask />
                <TaskList tasks={this.props.tasks} onTaskDone={this.handleTaskRemove} />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        tasks: getTasks(state)
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onTaskDone: (taskId: string) => dispatch(markTaskDone(taskId))
    };
};

const TaskListComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);

export default TaskListComponent; 