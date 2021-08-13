import {combineReducers} from "redux";
import todoReducer from './todo-reducer';
import weatherReducer from "./weather-reducer";
import cityReducer from "./city-reducer";
import { connectRouter } from 'connected-react-router'
import {createBrowserHistory} from "history";

export const history = createBrowserHistory()

const reducer = combineReducers({
    todoReducer,
    weatherReducer,
    cityReducer,
    router : connectRouter(history)
})


export type reducerType = ReturnType<typeof reducer>

export  default  reducer
