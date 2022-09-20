import {createStore, applyMiddleware} from "redux";
import root from "./reducers/rootReducer";
import thunk from "redux-thunk";

export const store = createStore(
	root,
	{},
	applyMiddleware(thunk)
)