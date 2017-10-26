import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacterById } from '../actions'

class HeroesList extends Component { 
	

	renderHeroesList(){
	return(
		<div>
			<ul className="list-group">
						{
							this.props.heroes.map(heroe => {
								return (
									<li className="list-group-item" key={heroe.id}>
										<div className="list-item">
											{heroe.name}
											<button onClick={() => this.props.addCharacterById(heroe.id)} className="btn btn-danger"> - </button>
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
		console.log(this.props)
		return(
			<div>
				<h2>HeroesList</h2>
				{this.renderHeroesList()}
			</div>
			)
	}

}

function mapStateToProps(state){
	return {
		heroes: state.heroes
	}
}

export default connect(mapStateToProps, { addCharacterById })(HeroesList);