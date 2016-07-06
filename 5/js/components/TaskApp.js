var TaskApp = React.createClass({

    getInitialState: function() {
        return {
            tasks: [
                {
                    title: 'Go to store',
                    done: true
                },
                {
                    title: 'Learn React',
                    done: false
                }
            ],
            task: ''
        };
    },

    onChange: function(event) {
        this.setState({ task: event.target.value });
    },

    addTask: function(event) {
        event.preventDefault();

        // Check something has been entered into the input
        if (this.state.task.length > 0) {
            // Update the tasks array to include the new item
            var tasks = this.state.tasks.concat([
                {
                    title: this.state.task,
                    done: false
                }
            ]);

            // Set the input's text back to empty
            var task = '';

            // Update the state
            this.setState({tasks, task});
        }
        // else show an error
    },

    toggleTaskState: function(index) {
        // Make a copy of tasks
        var tasks = this.state.tasks;

        // Update the done property of the task
        tasks[index].done = !tasks[index].done;

        // Update the state
        this.setState({ tasks });
    },

    deleteTask: function(index) {
        // Make a copy tasks
        var tasks = this.state.tasks;

        // Delete the task
        delete tasks[index];

        // Update the state
        this.setState({ tasks });
    },

    render: function() {
        return (
            <div className="task-list">
                <h1>My Tasks</h1>
                <TaskList 
                    tasks={ this.state.tasks } 
                    deleteTask={ this.deleteTask }
                    toggleTaskState={ this.toggleTaskState } />

                <form onSubmit={this.addTask}>
                    <input onChange={this.onChange} value={this.state.task} />
                    <button>Add task</button>
                </form>
            </div>
        );
    }

});
