import React from 'react';
import ReactDOM from 'react-dom'
import App from '../components/App'

// Set up Redux Store
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';





const store = createStore(reducers);
console.log('store.getState()', store.getState())

// Test Reducers actions
import { addCharacterById } from '../actions'

store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(2));



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('app-title')
	)