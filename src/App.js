import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
		};
	}

	render() {

		return (
			<div>
				<Home />
			</div>
		);
	}


}

export default App;
