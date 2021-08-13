import ActionTypes from "../action-types";

export interface ILoadCity {
    type : ActionTypes.FETCH_CITY_LOADING
}

export interface ISuccessCity {
    type : ActionTypes.FETCH_CITY_SUCCESS,
    payload : string
}

export interface IErrorCity {
    type : ActionTypes.FETCH_CITY_FAILURE,
    payload : string
}

export interface IInitialCityState {
    city : string,
    loading : boolean,
    error : null | string
}

export type IActionCity = ILoadCity | ISuccessCity | IErrorCity