import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

  state = {
    data: [
      { id: 1, name: 'Simon B' },
      { id: 2, name: 'Tomas B' },
      { id: 3, name: 'Will B' },
      { id: 4, name: 'Ben C' },
      { id: 5, name: 'Kent D' },
      { id: 6, name: 'Trevor E' },
      { id: 7, name: 'Aaron F' },
      { id: 8, name: 'Joel H' },
      { id: 9, name: 'Jafar H' },
      { id: 10, name: 'Tim K' },
    ]
  };

  update = () => {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.range).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.range).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.range).value
    });
  };

  render = () => {

    const rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person} />
    });

    return (<table>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

const PersonRow = props => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
};

export default App;
