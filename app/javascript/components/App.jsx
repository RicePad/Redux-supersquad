import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroesList from './HeroesList';



class App extends Component {

	render(){
		return(
			<div className="app-component-title">
				<h1>SuperSquad</h1>
				<CharacterList />
				<HeroesList />

			</div>
			)

	}
}


export default App;