import {IInitialCityState,IActionCity} from "../types/types-city";
import ActionTypes from "../action-types";

const initialState : IInitialCityState = {
    city : '',
    error : null,
    loading : true
}

const cityReducer = (state : IInitialCityState = initialState,action : IActionCity) : IInitialCityState => {
    switch (action.type) {
        case ActionTypes.FETCH_CITY_LOADING:
            return {
                ...state,
                loading : true
            }
        case ActionTypes.FETCH_CITY_SUCCESS:
            return {
                error : null,
                city : action.payload,
                loading : false
            }
        case ActionTypes.FETCH_CITY_FAILURE:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        default :
            return state
    }
}

export default cityReducer