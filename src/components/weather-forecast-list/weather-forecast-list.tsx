import React from 'react';
import { useTypedSelector } from "../../hooks";
import './weather-forecast-list.scss'
import WeatherForecastListItem from "../weather-forecast-list-item";

const WeatherForecastList: React.FC = () => {

    const { weatherForecastData } = useTypedSelector(state => state.weatherReducer)

    const list : React.ReactNode[] = []

    for(let i = 8; i < weatherForecastData.length - 1; i += 8 ) {
        list.push(
            <li key={weatherForecastData[i].dt}>
                <WeatherForecastListItem {...weatherForecastData[i]}/>
            </li>
        )
    }

    return (
        <div className="weather__forecast_block">
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default WeatherForecastList;