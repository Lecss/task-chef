
import * as React from 'react';
import { connect } from 'react-redux';
import { addNewTask } from '../containers/actions';

export interface AddTaskProps {
    onAddNewTask: (value: string) => void;
}

class AddTask extends React.Component<AddTaskProps> {

    handleAddTaskSubmit = (element: React.FormEvent<HTMLInputElement>) => {
        const target = element.target as HTMLInputElement;
        if (target.value) { this.props.onAddNewTask(target.value); }
    }

    render() {
        return (
            <div id="add-task">
                <input
                    placeholder={'Enter new task title'}
                    onBlur={this.handleAddTaskSubmit} 
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {

    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddNewTask: (value: any) => dispatch(addNewTask(value))
    };
};

const AddTaskComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTask);

export default AddTaskComponent; 