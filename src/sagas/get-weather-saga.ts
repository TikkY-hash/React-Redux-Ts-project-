import {IInitialCityState} from "../types/types-city";
import {call, put, select} from "redux-saga/effects";
import {reducerType} from "../reducers";
import {ICurrentWeather, IGetWeatherForecast} from "../types/types-weather";
import {onAddWeather, onFailureWeather} from "../action-creators";
import getData from "./ajax";

const getHttpString = (city : string,weatherLink : string) : string => {
    return `api.openweathermap.org/data/2.5/${weatherLink}?q=${city}&units=metric&appid=9c39ba35e422896bdfe2d260ab3c67db`
}

export function* onRequestWeather(city : string) {
    const weatherOnCurrentDay : ICurrentWeather = yield call(getData,getHttpString(city,'weather'))
    const weatherOnFiveDays : IGetWeatherForecast = yield call(getData,getHttpString(city,'forecast'))

    yield put(onAddWeather(weatherOnCurrentDay,weatherOnFiveDays.list))
}

export function* workerUserWeather() {
    try {
        const { city } : IInitialCityState  = yield select(( state : reducerType )  => state.cityReducer)

        yield onRequestWeather(city)
    }catch (err) {
        yield put(onFailureWeather(err))
    }
}

export function* workerGetInputWeather() {
    try {
        const city : string  = yield select(( state : reducerType )  => state.weatherReducer.search)

        yield onRequestWeather(city)
    }catch (err) {
        yield put(onFailureWeather(err))
    }
}
