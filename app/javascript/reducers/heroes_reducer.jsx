
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import characters_json from '../data/characters.json';

 function heroes(state=[], action) {
	switch(action.type){
		case ADD_CHARACTER:
			let heroes = [...state, createCharacter(action.id)];
			return heroes;
		case REMOVE_CHARACTER:
			heroes = state.filter(item => item.id !== action.id);
			return heroes


		default:
			return state

	}

}

function createCharacter(id){
	let character = characters_json.find(c => c.id === id);
	return character
}

export default heroes;