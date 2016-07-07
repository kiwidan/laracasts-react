import Gist from './Gist';
import AddGist from './AddGist';

var Gistbox = React.createClass({

    getInitialState: function() {
        return {
            gists: [{ username: 'paddymoran', url: 'https://gist.github.com/paddymoran/0888ee37380be3435cfc486e26f0d2ac' }]
        };
    },

    addGist: function(username) {
        var url = `https://api.github.com/users/${username}/gists`;

        $.get(url, (result) => {
            // Get the most recent gist
            var gist = result[0];

            // Get the values we need
            var username = gist.owner.login;
            var url = gist.html_url;

            // Add the new gist to the gists array
            var gists = this.state.gists.concat({ username, url });

            // Update the state
            this.setState({ gists });
        });
    },

    render: function() {

        var newGist = function(gist) {
            return <Gist username={gist.username} url={gist.url} />
        };

        return (
            <div className="gistbox">
                <h1>Gistbox</h1>

                <AddGist onAdd={ this.addGist } />

                { this.state.gists.map(newGist) }
            </div>
        );
    }

});

export default Gistbox;
