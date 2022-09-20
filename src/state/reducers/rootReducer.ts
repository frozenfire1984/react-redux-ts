import {combineReducers} from "redux"
import reducer from "./bankReducer";

export const root = combineReducers({
	bank: reducer,
})

export default root

export type TState = ReturnType<typeof root>