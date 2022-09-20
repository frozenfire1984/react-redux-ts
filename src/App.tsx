import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {TState} from './state/reducers/rootReducer'
import {depositMoney, withdrawMoney, bankruptMoney, test} from "./state/action-creators/actionCreatorsBank";
//import {actionCreatorsBank} from './state/action-creators'
import './App.css';

function App() {
	const dispatch = useDispatch()
	//const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(actionCreatorsBank, dispatch)
	const state = useSelector((state: TState) => state.bank)
	
	//console.log(withdrawMoney)
	
	
	//const test = depositMoney
	
	
	
	//console.log(dispatch)
	

	
	const fn = () => {
		
		//depositMoney(100).call(null, dispatch)
		

		dispatch(depositMoney(100))
		
		
		//const ttt: any = depositMoney(100)
		
		//dispatch(ttt)
		
		
	}
	
	
	
	return (
		<div className="App">
			{state}
			<br/>
			{/*<button onClick={() => depositMoney(100)}>Deposit</button>
			<button onClick={() => withdrawMoney(100)}>Deposit</button>
			<button onClick={() => bankruptMoney()}>Bankrupt</button>*/}
			
			<button onClick={fn}>Deposit</button>
			{/*<button onClick={() => withdrawMoney(100)}>Deposit</button>
			<button onClick={() => bankruptMoney()}>Bankrupt</button>*/}
		</div>
	);
}

export default App;
