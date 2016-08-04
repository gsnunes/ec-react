/*
import React from 'react';
import ReactDOM from 'react-dom';

export class Hello extends React.Component {
 render() {
  return <div>Hello {this.props.name}</div>;
 }
}

ReactDOM.render(<Hello />, document.getElementById('example'));
*/

/*
import React from 'react';

export class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
*/

export const Hello = ({name}) => (
	<div>{`Hi ${name}`}</div>
);
