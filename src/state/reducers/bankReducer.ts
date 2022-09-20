import {TAction, ActionNames} from "../@types/bank";

const initialState = 0

const reducer = (state: number = initialState, action: TAction) => {
	switch (action.type) {
		case ActionNames.DEPOSIT:
			return state + action.payload
		case ActionNames.WITHDRAW:
			return state - action.payload
		case ActionNames.BANKRUPT:
			return 0
		default:
			return state
	}
}

export default reducer