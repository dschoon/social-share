import React from 'react';
import SocialNetwork from './SocialNetwork';

export default React.createClass({
    displayName: 'SocialShare',
    propTypes: {
        id: React.PropTypes.string,
        class: React.PropTypes.string,
        networks: React.PropTypes.array.isRequired
    },
    render() {
        return (
            React.DOM.div({ id: this.props.id, className: this.props.class },
                React.createElement(SocialNetwork, { networks: this.props.networks })
            )
        );
    }
});
