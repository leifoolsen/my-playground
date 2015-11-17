import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './components/message';
import MessageCreator from './components/message-creator';
import css from './main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'LOL',
      messages: []
    };
  }

  addMessage(newContent) {
    const messages = this.state.messages;
    messages.unshift({
      id: this.state.messages.length,
      author: this.state.author,
      content: newContent,
      createdAt: new Date()
    });
    this.setState({
      messages: messages
    });
  }

  render() {
    return (
      <div>
        <MessageCreator create={this.addMessage.bind(this)} />
        {
          this.state.messages.map(message => {
            return <Message
                author={message.author}
                content={message.content}
                createdAt={message.createdAt}
                key={message.id} />;
          })
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#react-mount'));
