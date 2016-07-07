var AddGist = React.createClass({

    getInitialState: function() {
        return {
            username: ''
        };
    },

    onChange: function(event) {
        this.setState({
            username: event.target.value
        });
    },

    addGist: function(event) {
        event.preventDefault();

        // Add the gist
        this.props.onAdd(this.state.username);

        // Empty the input for the next GitHub username
        this.setState({
            username: ''
        });
    },

    render: function() {
        return (
            <form onSubmit={this.addGist}>
                <div className="form-group">
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        className="form-control"
                        placeholder="Type a GitHub username..." />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Fetch Latest Gist</button>
                </div>
            </form>
        );
    }

});
