import ActionTypes from "../action-types/";
import {IAddToTasks, IClearAllTask, IDeleteTask, IEditTask, IHoverTask, IToggleTask} from "../types/types-todo";
import {IAddWeather, ICurrentWeather, IForecastWeather, IWeatherFailure, IWeatherLoad, ISearchWeather} from "../types/types-weather";
import {ILoadCity,ISuccessCity,IErrorCity} from "../types/types-city";


export let onAddTask = (payload : string) : IAddToTasks | void  => {
    return {
        type : ActionTypes.ADD_TO_TASKS,
        payload
    }
}

export const onEditTask = (payload : number,text : string) : IEditTask => {
    return {
        type : ActionTypes.EDIT_TASK,
        payload,
        text
    }
}

export const onDeleteTask = (payload : number) : IDeleteTask => {
    return  {
        type : ActionTypes.DELETE_OF_TASKS,
        payload
    }
}

export const onToggleTask = (payload : number) : IToggleTask => {
    return {
        type : ActionTypes.TOGGLE_TASK,
        payload
    }
}

export const onHoverTask = (id : number) : IHoverTask => {
    return {
        type : ActionTypes.HOVER_TASK,
        payload : id
    }
}

export const onClearAllTask  = () : IClearAllTask => {
    return {
        type : ActionTypes.CLEAR_ALL_TASK
    }
}

export const onAddWeather = (currentWeather : ICurrentWeather,forecastWeather : IForecastWeather[]) : IAddWeather => {
    return{
        type : ActionTypes.FETCH_WEATHER_SUCCESS,
        currentWeather,
        forecastWeather
    }
}

export const onLoadWeather = (): IWeatherLoad => {
    return {
        type : ActionTypes.FETCH_WEATHER_LOAD
    }
}

export const onFailureWeather = (payload : string): IWeatherFailure  => {
    return {
        type : ActionTypes.FETCH_WEATHER_FAILURE,
        payload
    }
}

export const onSearchWeather = (payload : string) : ISearchWeather => {
    return {
        type : ActionTypes.FETCH_INPUT_SEARCH,
        payload
    }
}

export const onLoadCity = () : ILoadCity => {
    return {
        type : ActionTypes.FETCH_CITY_LOADING
    }
}

export const onSuccessCity = (payload : string) : ISuccessCity => {
    return {
        type : ActionTypes.FETCH_CITY_SUCCESS,
        payload
    }
}

export const onFailureCity = (payload : string) : IErrorCity  => {
    return {
        type : ActionTypes.FETCH_CITY_FAILURE,
        payload
    }
}


