import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducers from "./Reducers/RootReducers";
export default function configureStore(initialState = {}) {
    return createStore(
        RootReducers,
        applyMiddleware(thunk)
    );
}