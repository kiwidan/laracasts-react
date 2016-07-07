var Avatar = React.createClass({

    getDefaultProps: function() {
        return {
            path: 'http://pickaface.net/avatar/donavonwd577c72fab2056.png'
        };
    },

    render: function() {
        return (
            <div>
                <a href={this.props.path}>
                    <img src={this.props.path} />
                </a>
            </div>
        );
    }

});

React.render(<Avatar path="http://pickaface.net/avatar/HalcyonicBlues51d76e22316fb.png"/>, document.body);
React.render(<Avatar />, document.body);
