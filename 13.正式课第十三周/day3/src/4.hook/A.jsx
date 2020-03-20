import React, { useState, useEffect, useReducer, useRef, createRef } from 'react';
// function reducer(state, action) {
// 	state = JSON.parse(JSON.stringify(state));
// 	switch (action.type) {
// 		case 'CHANGE_N':
// 			state.n++;
// 			break;
// 		case 'CHANGE_M':
// 			state.m++;
// 			break;
// 	}
// 	return state;
// }

// function A(props) {
// 	let [{ n, m }, dispatch] = useReducer(reducer, {
// 		n: 0,
// 		m: 0
// 	});
// 	return <>
// 		{n} === {m}
// 		<button onClick={ev => {
// 			dispatch({
// 				type: 'CHANGE_N'
// 			});
// 		}}>+N</button>
// 		<button onClick={ev => {
// 			dispatch({
// 				type: 'CHANGE_M'
// 			});
// 		}}>+M</button>
// 	</>;
// };

// function A(props) {
// 	let [state, setState] = useState({
// 		n: 0,
// 		m: 0
// 	});
// 	return <>
// 		{state.n}==={state.m}
// 		<button onClick={ev => {
// 			setState({
// 				...state,
// 				n: 100
// 			});
// 		}}>+</button>
// 	</>;
// }; 
// function A(props) {
// 	let [num, changeNum] = useState(0); //=>[状态,修改状态的方法]
// 	return <>
// 		{num}
// 		<button onClick={ev => {
// 			changeNum(num + 1);
// 		}}>+</button>
// 	</>;
// }; 

export default A;