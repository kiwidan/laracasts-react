(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Gistbox = require('./components/Gistbox');

var _Gistbox2 = _interopRequireDefault(_Gistbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

React.render(React.createElement(_Gistbox2.default, null), document.querySelector('#app'));

},{"./components/Gistbox":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var AddGist = React.createClass({
    displayName: 'AddGist',


    getInitialState: function getInitialState() {
        return {
            username: ''
        };
    },

    onChange: function onChange(event) {
        this.setState({
            username: event.target.value
        });
    },

    addGist: function addGist(event) {
        event.preventDefault();

        // Add the gist
        this.props.onAdd(this.state.username);

        // Empty the input for the next GitHub username
        this.setState({
            username: ''
        });
    },

    render: function render() {
        return React.createElement(
            'form',
            { onSubmit: this.addGist },
            React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement('input', {
                    value: this.state.username,
                    onChange: this.onChange,
                    className: 'form-control',
                    placeholder: 'Type a GitHub username...' })
            ),
            React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement(
                    'button',
                    { className: 'btn btn-primary' },
                    'Fetch Latest Gist'
                )
            )
        );
    }

});

exports.default = AddGist;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Gist = React.createClass({
    displayName: "Gist",


    render: function render() {
        return React.createElement(
            "div",
            null,
            this.props.username,
            "'s last gist is ",
            React.createElement(
                "a",
                { href: this.props.url },
                " here"
            )
        );
    }

});

exports.default = Gist;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Gist = require('./Gist');

var _Gist2 = _interopRequireDefault(_Gist);

var _AddGist = require('./AddGist');

var _AddGist2 = _interopRequireDefault(_AddGist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gistbox = React.createClass({
    displayName: 'Gistbox',


    getInitialState: function getInitialState() {
        return {
            gists: [{ username: 'paddymoran', url: 'https://gist.github.com/paddymoran/0888ee37380be3435cfc486e26f0d2ac' }]
        };
    },

    addGist: function addGist(username) {
        var url = 'https://api.github.com/users/' + username + '/gists';

        $.get(url, function (result) {
            // Get the most recent gist
            var gist = result[0];

            // Get the values we need
            var username = gist.owner.login;
            var url = gist.html_url;

            // Add the new gist to the gists array
            var gists = this.state.gists.concat({ username: username, url: url });

            // Update the state
            this.setState({ gists: gists });
        }.bind(this));
    },

    render: function render() {

        var newGist = function newGist(gist) {
            return React.createElement(_Gist2.default, { username: gist.username, url: gist.url });
        };

        return React.createElement(
            'div',
            { className: 'gistbox' },
            React.createElement(
                'h1',
                null,
                'Gistbox'
            ),
            React.createElement(_AddGist2.default, { onAdd: this.addGist }),
            this.state.gists.map(newGist)
        );
    }

});

exports.default = Gistbox;

},{"./AddGist":2,"./Gist":3}]},{},[1]);
