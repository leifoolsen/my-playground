import React from 'react';
import {Link} from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1><Link to="/">Reduxtagram</Link></h1>
      </div>
    );
  }
});
export default App;
