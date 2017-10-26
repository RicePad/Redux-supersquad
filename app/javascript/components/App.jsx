import React, { Component } from 'react';
import CharacterList from './CharacterList';



class App extends Component {

	render(){
		return(
			<div className="app-component-title">
				<h1>SuperSquad</h1>
				<CharacterList />

			</div>
			)

	}
}


export default App;