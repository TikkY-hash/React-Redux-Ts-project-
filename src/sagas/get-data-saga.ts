import {put,take,fork,takeEvery} from 'redux-saga/effects'
import {IGetRoute} from "../types/types-weather";
import {onLoadWeather} from "../action-creators";
import { LOCATION_CHANGE } from "connected-react-router";
import ActionTypes from "../action-types";
import {workerGetUserCity} from "./get-city-saga";
import {workerUserWeather,workerGetInputWeather} from "./get-weather-saga";

export function * getPageData() {
    while (true) {
        const action : IGetRoute = yield take(LOCATION_CHANGE)

        if(action.payload.location.pathname.endsWith('weather')) {
            yield put(onLoadWeather())

            yield workerGetUserCity()
            yield workerUserWeather()
        }
    }
}

export function* watcherData() {
    yield fork(getPageData)
    yield takeEvery(ActionTypes.FETCH_INPUT_SEARCH,workerGetInputWeather)
}