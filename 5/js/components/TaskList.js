var TaskList = React.createClass({

    toggleTaskState: function(index) {
        this.props.toggleTaskState(index);
    },

    deleteTask: function(index) {
        this.props.deleteTask(index);
    },

    displayTask: function(task, i) {
        return (
            <li className={ task.done ? 'done': '' } >
                <input
                    type="checkbox"
                    checked={ task.done }
                    onChange={ this.toggleTaskState.bind(this, i) } />
                { task.title }
                <button onClick={ this.deleteTask.bind(this, i) }>x</button>
            </li>
        );
    },

    render: function() {
        return (
            <ul>
                { this.props.tasks.map(this.displayTask) }
            </ul>
        );
    }

});
