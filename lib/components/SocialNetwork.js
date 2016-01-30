import React from 'react';

export default React.createClass({
    displayName: 'SocialShare',
    propTypes: {
        id: React.PropTypes.string,
        class: React.PropTypes.string,
        networks: React.PropTypes.array.isRequired,
        direction: React.PropTypes.string,
        iconWidth: React.PropTypes.string,
        iconMargin: React.PropTypes.string,
        hoverEffect: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            id: '',
            class: '',
            networks: [],
            direction: 'horizontal',
            iconWidth: '40px',
            iconMargin: '8px',
            hoverEffect: 'fade'
        };
    },
    render() {
        const networks = [];
        this.props.networks.forEach((image, index) => {
            networks.push(
                React.DOM.div({
                    className: 'icon-container ' + this.props.hoverEffect,
                    style: {
                        display: this.props.direction == 'horizontal' ? 'inline-block' : 'block',
                        margin: this.props.direction == 'horizontal' ? ('0 ' + this.props.iconMargin + ' 0 0') : ('0 0 ' + this.props.iconMargin + ' 0')
                    }
                }, React.DOM.a({
                    key: index,
                    href: image.href ? image.href : image.src,
                    target: '_blank'
                }, React.DOM.img({
                    key: index,
                    className: 'network-icon',
                    src: image.src,
                    style: {
                        width: this.props.iconWidth,
                        margin: this.props.iconMargin
                    }
                }, null)))
            );
        });

        return (
            React.DOM.div({ id: this.props.id, className: 'network-list ' + this.props.class },
                networks
            )
        );
    }
});
