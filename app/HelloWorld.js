import React from 'react';

export default class TodoApp extends React.Component{
	render() {
		return(
			<div>
				<h1> Hello {this.props.user} </h1>
			</div>
			)
	}
}