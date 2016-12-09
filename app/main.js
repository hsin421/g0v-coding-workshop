import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './HelloWorld.js';

class App extends React.Component{
	render() {
		return <HelloWorld user="g0v" />
	}
}



render(<App />, document.getElementById('app'))
