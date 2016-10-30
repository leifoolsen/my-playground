import React from 'react';

class SearchLayout extends React.Component {
  render() {
    return (
      <div className="search">
        <header className="search-header"><p>Search Header</p></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"><p>Search Footer</p></div>
      </div>
    );
  }
}

SearchLayout.propTypes = {
  children: React.PropTypes.node,
};

export default SearchLayout;
