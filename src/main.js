/*
// Example 1
import React from 'react';
import ReactDOM from 'react-dom';

export class Hello extends React.Component {
 render() {
  return <div>Hello {this.props.name}</div>;
 }
}

ReactDOM.render(<Hello />, document.getElementById('content'));
*/

/*
// Example 2
import React from 'react';

export class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
*/

/*
// Example 3
export const Hello = ({name}) => (
	<div>{`Hi ${name}`}</div>
);
*/

// Example 4
export const Hello = ({name}) => {
	const sayHi = (event) => {
		alert(`Hi ${name}`);
	};

	return (
		<div>
			<a href="#" onClick={sayHi}>Say Hi</a>
		</div>
	);
};
