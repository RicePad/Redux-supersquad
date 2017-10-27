import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacterById } from '../actions'

class CharacterList extends Component {

	renderListCharacters(){
		let characters = this.props.characters
		return(
			<div>
				<ul className="list-group">
					{
						characters.map(character => {
							return(
								<li className="list-group-item" key={character.id}>
									<div className="list-item" >
										{character.name}
										<button className="btn btn-success" onClick={() => this.props.addCharacterById(character.id)}> + </button>
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
				<h2>Character List</h2>
				{this.renderListCharacters()}
			</div>
			)
	}

}

function mapStateToProps(state){
	return {
		characters: state.characters
	}
}

export default connect(mapStateToProps, { addCharacterById })(CharacterList);
