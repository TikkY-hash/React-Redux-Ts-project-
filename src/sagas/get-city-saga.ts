import {IGetIp} from "../types/types-weather";
import {call, put} from "redux-saga/effects";
import {onFailureWeather, onSuccessCity} from "../action-creators";
import getData from "./ajax";

export function* workerGetUserCity() {
    try {
        const userCity : IGetIp = yield call(getData,'geolocation-db.com/json/d720c370-f16d-11eb-ae06-4167033db18b')

        yield put(onSuccessCity(userCity.city))

    }catch (err) {
        yield (onFailureWeather(err))
    }
}