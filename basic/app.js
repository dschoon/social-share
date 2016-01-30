import React from 'react';
import ReactDOM from 'react-dom';
import SocialShare from '../../lib/index';

const App = React.createClass({
    render() {
        const networks = [{
            // Twitter
            src: 'http://bit.ly/1Srk5KZ',
        }, {
            // Facebook
            src: 'http://bit.ly/1PGR74U'
        }, {
            // Google+
            src: 'http://bit.ly/1PLBvTU'
        }
        ];
        return (
            React.DOM.div({ id: '', className: 'wrapper' },
                React.DOM.h1({ id: this.props.id, className: this.props.class }, 'Social Share Buttons'),
                React.createElement(SocialShare, { networks })
            )
        );
    }
});

ReactDOM.render(React.createElement(App), document.getElementById('container'));
