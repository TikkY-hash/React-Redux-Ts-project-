import ActionTypes from "../action-types";

export interface IGetIp {
    IPv4 : string,
    city : string,
    country_code : string,
    country_name : string,
    latitude : number,
    longitude : number,
    postal : string,
    state : string
}

interface IWeather {
    id : number,
    main : string,
    description : string,
    icon : string
}

interface IWeatherMain {
    feels_like : number,
    humidity : number,
    pressure : number,
    temp : number,
    temp_max : number,
    temp_min : number
}

interface IWeatherForecastMain extends IWeatherMain{
    grnd_level : number,
    sea_level : number,
    temp_kf: number
}

interface ICurrentSys {
    type : number,
    id : number,
    country : string,
    sunrise : number,
    sunset : number
}

interface IForecastSys {
    pod : number
}

interface ITemplateWeather {
    clouds : {all : number},
    dt : number,
    visibility : number,
    main : IWeatherMain | IWeatherForecastMain,
    sys : ICurrentSys | IForecastSys,
    weather  : IWeather[],
    wind : {
        speed: number,
        deg: number,
        gust? : number
    }
}

export interface ICurrentWeather extends ITemplateWeather {
    base : string,
    cod : number,
    coord : {
        lon: number,
        lat: number,
    },
    id : number,
    name : string,
    timezone : string,
}

export interface IForecastWeather extends ITemplateWeather{
    dt_txt: string,
    pop : number
}

export interface IGetWeatherForecast {
    city? : {},
    cnt : number,
    cod : string,
    message : number,
    list : IForecastWeather[]
}

export interface IWeatherInitialState {
    loading : boolean,
    error : null | string,
    weatherForecastData : IForecastWeather[],
    weatherToday : ICurrentWeather,
    search : string
}

export interface IAddWeather {
    type : ActionTypes.FETCH_WEATHER_SUCCESS,
    currentWeather : ICurrentWeather,
    forecastWeather : IForecastWeather[]
}

export interface IWeatherLoad{
    type : ActionTypes.FETCH_WEATHER_LOAD
}

export interface IWeatherFailure {
    type : ActionTypes.FETCH_WEATHER_FAILURE,
    payload : string
}

export interface IWeatherListItem {
    dt_txt : string,
    main : IWeatherForecastMain,
    weather : IWeather[]
}

export interface ISearchWeather {
    type : ActionTypes.FETCH_INPUT_SEARCH,
    payload : string
}

export interface IGetRoute {
    payload : {
        action : string,
        isFirstRendering : boolean,
        location : {
            pathname : string,
            search : string,
            hash : string,
            state : undefined,
            key : string
        }
    },
    type : string
}

export type WeatherActionType = IAddWeather | IWeatherLoad | IWeatherFailure | ISearchWeather