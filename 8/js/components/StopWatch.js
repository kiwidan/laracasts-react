var StopWatch = React.createClass({

    getInitialState: function() {
        return {
            time: 0,
            until: '',
            isRunning: false
        };
    },

    type: function(event) {
        this.setState({ until: event.target.value });
    },

    start: function() {
        this.setState({ isRunning: true });

        this.interval = setInterval(function() {
            this.tick();

            if (this.isTimeUp()) {
                this.finish();
            }
        }.bind(this), 1000);
    },

    tick: function() {
        this.setState({ time: this.state.time + 1 });
    },

    isTimeUp: function() {
        return this.state.time == this.state.until;
    },

    finish: function() {
        // Clear the interval
        clearInterval(this.interval);

        // Set time back to 0, until back to an empty string, and isRunning to false
        // this.setState({ time: 0, until: '', isRunning: false });

        // ^ OR:
        this.replaceState(this.getInitialState());

        // Give focus to the input
        React.findDOMNode(this.refs.input).focus();
    },

    render: function() {
        return (
            <div>
                <input
                    ref="input"
                    onChange={this.type}
                    value={this.state.until} />

                <button
                    disabled={this.state.isRunning}
                    ref="button"
                    onClick={this.start}>Go</button>

                <h1>{this.state.time}</h1>
            </div>
        );
    }

});
