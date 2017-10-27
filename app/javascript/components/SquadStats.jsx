import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
	
	strength(){
		let strength = 0;
		this.props.heroes.forEach(heroe => strength += heroe.strength);
		return strength;
	}

	intelligence(){
		let intelligence = 0;
		this.props.heroes.forEach(heroe => intelligence += heroe.intelligence)
		return intelligence;
	}

	speed(){
		let speed = 0;
		this.props.heroes.forEach(heroe => speed += heroe.speed)
		return speed
	}




	render(){
		return(
			<div>
			<h2>SquadStats</h2>
			<div>
				<ul className="list-group">
					<li className="list-group-item">
						<b className="list-item">Overall Strenght: {this.strength()} </b>
					</li>
					<li className="list-group-item">
						<b className="list-item">Overall Intelligence: {this.intelligence()} </b>
					</li>
					<li className="list-group-item">
						<b className="list-item">Overall Speed: {this.speed()} </b>
					</li>
				</ul>
			</div>
			</div>
			)
	}

}


function mapStateToProps(state){
	return {
		heroes: state.heroes

	}
}

export default connect(mapStateToProps, null)(SquadStats);