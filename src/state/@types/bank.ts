//import {ActionType} from "../action-@types";

export enum ActionNames {
	DEPOSIT = "deposit",
	WITHDRAW = "withdraw",
	BANKRUPT = "bankrupt"
}

interface IDepositAction {
	type: ActionNames.DEPOSIT,
	payload: number
}

interface IWithdrawAction {
	type: ActionNames.WITHDRAW,
	payload: number
}

interface IBankruptAction {
	type: ActionNames.BANKRUPT,
}

export type TAction = IDepositAction | IWithdrawAction | IBankruptAction
