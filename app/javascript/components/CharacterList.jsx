import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacterById } from '../actions'

class CharacterList extends Component {

	renderListCharacters(){
		let characters = this.props.characters
		return(
			<div>
				<ul>
					{
						characters.map(character => {
							return(
								<li key={character.id}>
									<div>
										{character.name}
										<button onClick={() => this.props.addCharacterById(character.id)}> + </button>
									</div>
								</li>
								)
						})
					}
				</ul>
			</div>
			)
	}

	render(){
	console.log('this.props.characters', this.props)

		return(
			<div>
				<h1>Character List</h1>
				{this.renderListCharacters()}
			</div>
			)
	}

}

function mapStateToProps(state){
	return {
		characters: state.characters,
		heroes: state.heroes
	}
}

export default connect(mapStateToProps, { addCharacterById })(CharacterList);
