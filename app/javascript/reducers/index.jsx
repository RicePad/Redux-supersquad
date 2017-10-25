import { combineReducers } from 'redux';
import characters from './characters_reducer';
import heroes from './heroes_reducer';

export default combineReducers ({
	characters,
	heroes
})