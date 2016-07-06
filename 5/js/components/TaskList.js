var TaskList = React.createClass({

    completeTask: function(index) {
        this.props.completeTask(index);
    },

    deleteTask: function(index) {
        this.props.deleteTask(index);
    },

    displayTask: function(task, i) {
        return (
            <li className={ task.done ? 'done': '' } >
                <input type="checkbox" onClick={ this.completeTask.bind(this, i) } />
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
