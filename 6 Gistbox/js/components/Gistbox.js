var Gistbox = React.createClass({

    getInitialState: function() {
        return {
            gists: []
        };
    },

    render: function() {

        var newGist = function(gist) {
            return <Gist username={gist.username} url={gist.url} />
        };

        return (
            <div>
                <h1>Gistbox</h1>
                <form>
                </form>

                { this.state.gists.map(newGist) }
            </div>
        );
    }

});
