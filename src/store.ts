import {applyMiddleware, createStore} from "redux";
import reducer, {history} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import { routerMiddleware } from "connected-react-router";

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleWare,routerMiddleware(history))))

store.subscribe(() => {

    const result = store.getState().todoReducer.toDo.map(value => {
        return {
            ...value,
            hasHover : false
        }
    })

    localStorage.setItem('toDo', JSON.stringify(result))
})

sagaMiddleWare.run(rootSaga)


export  default store