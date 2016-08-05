import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
  }

  handleClick = ( /*event*/ ) => {
    this.setState({likesCount: this.state.likesCount + 1});
  };

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.handleClick}>Like Me</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;
