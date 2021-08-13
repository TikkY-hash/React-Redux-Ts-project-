import React,{useContext} from 'react';
import {IForecastWeather} from "../../types/types-weather";
import DayOfWeek,{imageUrl} from "../context";
import './weather-forecast-list-item.scss'
import '../../weather-icons-master/css/weather-icons.css'

const WeatherForecastListItem = ({ weather,main : { temp }, dt_txt } : IForecastWeather) => {
    const {namesOfWeek} = useContext(DayOfWeek)
    const {style} = useContext(imageUrl)

    const numberOfWeek : number = new Date(dt_txt).getDay()

    const tempWithFloor = Math.floor(temp)

    return (
        <div className="weather__forecast_information">
            <h3 className="weather__forecast_week">{namesOfWeek[numberOfWeek]}</h3>
            <div className="weather__forecast_position">
                <i className={style(weather[0].id)}></i>
            </div>
            <h3>{tempWithFloor}&#176; <span className="bread">/ {tempWithFloor}&#176;</span></h3>
        </div>
    );
};

export default WeatherForecastListItem;