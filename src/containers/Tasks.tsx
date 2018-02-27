import * as React from 'react';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import { Task } from '../components/TaskListItem';
import { connect } from 'react-redux';
import { getTasks } from './state';

import '../components/taskListItem.css';
import '../components/addTask.css';

export interface TasksProps {
    tasks: Task[];
}

class Tasks extends React.Component<TasksProps> {
    render() {
        return (
            <div>
                <AddTask />
                <TaskList tasks={this.props.tasks} />
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
    };
};

const TaskListComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);

export default TaskListComponent; 