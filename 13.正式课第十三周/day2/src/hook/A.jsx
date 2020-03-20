import React, { useState, useEffect, useReducer, useRef, createRef } from 'react';

function reducer(state, action) {
	state = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case 'CHANGE_N':
			state.n++;
			break;
		case 'CHANGE_M':
			state.m++;
			break;
	}
	return state;
}

function A(props) {
	let [{ n, m }, dispatch] = useReducer(reducer, {
		n: 0,
		m: 0
	});
	return <>
		{n} === {m}
		<button onClick={ev => {
			dispatch({
				type: 'CHANGE_N'
			});
		}}>+N</button>
		<button onClick={ev => {
			dispatch({
				type: 'CHANGE_M'
			});
		}}>+M</button>
	</>;
};


// function A(props) {
// 	let spanRef = useRef(); //=>{current:null}

// 	return <>
// 		{/* {current:span} */}
// 		<span ref={spanRef}>0</span>

// 		<button onClick={ev => {
// 			spanRef.current.innerHTML++;
// 		}}>+</button>
// 	</>;
// };



// function A(props) {
// 	let [state, setState] = useState(function () {
// 		return {
// 			n: 0,
// 			m: 0
// 		}
// 	});

// 	// useEffect：给函数组件设置生命周期 componentDidMount/componentDidUpdate
// 	/* useEffect(() => {
// 		// 第一次和重新渲染都会执行
// 		console.log('OK');
// 	}); */
// 	/* useEffect(() => {
// 		// 最有第一次完成会执行
// 		console.log('OK');
// 	}, []); */
// 	/* useEffect(() => {
// 		// 设置了依赖项：只有n状态改变，才会执行此钩子
// 		console.log('OK');
// 	}, [state.n]); */

// 	return <>
// 		{state.n}==={state.m}
// 		<button onClick={ev => {
// 			setState({
// 				...state,
// 				// n: state.n + 1,
// 				m: state.m + 1
// 			});
// 		}}>+</button>
// 	</>;
// };


/* let _state;
function useState(state) {
	if (!_state) {
		_state = state;
	}

	function setState(newState) {
		_state = newState;
	}

	return [_state, setState];
} */


/* function A(props) {
	// 每一次重新渲染，赋值初始值的操作都会执行，只不过REACT内部帮我们做了一件事：状态有值后则不会重新设置初始值
	let [state, setState] = useState(function () {
		// 初始值懒设置：只有第一次渲染组件会设置，后期重新渲染，此步骤不执行
		return {
			n: 0,
			m: 0
		}
	});
	return <>
		{state.n}==={state.m}
		<button onClick={ev => {
			setState({
				...state,
				n: 100
			});
		}}>+</button>
	</>;
}; */

/* function A(props) {
	let [n, changeN] = useState(0);
	let [m, changeM] = useState(0);
	return <>
		{n}==={m}
		<button onClick={ev => {
			changeN(100);
			changeM(200);
		}}>+</button>
	</>;
}; */


/* function A(props) {
	let [state, setState] = useState({
		n: 0,
		m: 0
	});
	return <>
		{state.n}==={state.m}
		<button onClick={ev => {
			setState({
				...state,
				n: 100
			});
		}}>+</button>
	</>;
}; */


/* function A(props) {
	let [num, changeNum] = useState(0); //=>[状态,修改状态的方法]
	return <>
		{num}
		<button onClick={ev => {
			changeNum(num + 1);
		}}>+</button>
	</>;
}; */
export default A;