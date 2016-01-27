import React from 'react';
import SocialShare from '../../lib/index';

let App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>social-share</h1>
        <SocialShare/>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('container'));
