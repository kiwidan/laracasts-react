var Counter = React.createClass({

    getInitialState: function() {
        return { count: 0 };
    },

    add: function() {
        this.setState({
            count: this.state.count + 1
        });
    },

    subtract: function() {
        this.setState({
            count: this.state.count - 1
        });
    },

    render: function() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>

                <button onClick={this.subtract}>-1</button>
                <button onClick={this.add}>+1</button>
            </div>
        );
    }

});
