import {ICurrentWeather, IWeatherInitialState, WeatherActionType} from "../types/types-weather";
import ActionTypes from "../action-types";

const initialState : IWeatherInitialState = {
    weatherForecastData : [],
    weatherToday : {} as ICurrentWeather,
    loading : true,
    error : null,
    search : ''
}

const weatherReducer = (state = initialState,action : WeatherActionType) :IWeatherInitialState  => {
    switch (action.type) {
        case ActionTypes.FETCH_WEATHER_LOAD:
            return {
                 ...state,
                loading : true
            }
        case ActionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weatherToday : action.currentWeather,
                weatherForecastData : action.forecastWeather,
                error : null,
                loading : false
            }
        case ActionTypes.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        case ActionTypes.FETCH_INPUT_SEARCH:
            return {
                ...state,
                loading : true,
                search : action.payload
            }
        default :
            return state
    }
}

export default weatherReducer