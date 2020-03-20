import * as TYPES from '../action-types';
const initState = {};
export default function taskReducer(state = initState, action) {
	state = JSON.parse(JSON.stringify(state));
	switch (action.type) {

	}
	return state;
}