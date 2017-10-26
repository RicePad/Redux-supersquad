import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroesList from './HeroesList';





class App extends Component {

	render(){
		return(
			<div className="App">
				<h1>SuperSquad</h1>
				
				<div class="row">
					<div className="col-md-6">
	          			<CharacterList />
	        		</div>
					
					<div className="col-md-6">
						<HeroesList />
					</div>
				</div>

			</div>
			)

	}
}


export default App;