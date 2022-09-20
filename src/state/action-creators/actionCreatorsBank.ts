import {Dispatch} from "redux";
import {TAction} from "../@types/bank";
import {ActionNames} from "../@types/bank";

type TF = any

export const depositMoney = (amount: any): any => {
	/*return (dispatch: Dispatch<TAction>):any => {
		console.log("!!!!")
		dispatch({
			type: ActionNames.DEPOSIT,
			payload: amount
		})
	}*/
	
	/*return (arg: any):any => {
		console.log("!!!!")
		
		arg({
			type: ActionNames.DEPOSIT,
			payload: amount
		})
		
		/!*dispatch({
			type: ActionNames.DEPOSIT,
			payload: amount
		})*!/
	}*/
	
	
	return {
		type: ActionNames.DEPOSIT,
		payload: amount
	}
}

export const test = () => {
	return (arg: any) => {
		console.log(arg)
		return "foo"
	}
}

export const withdrawMoney = (amount: number) => {
	return (dispatch: Dispatch<TAction>) => {
		dispatch({
			type: ActionNames.WITHDRAW,
			payload: amount
		})
	}
}

export const bankruptMoney = () => {
	return (dispatch: Dispatch<TAction>) => {
		dispatch({
			type: ActionNames.BANKRUPT,
		})
	}
}