import {all,spawn} from 'redux-saga/effects'
import {watcherData} from "./get-data-saga";

export default function* rootSaga() {
    yield all([
        spawn(watcherData)
    ])
}



