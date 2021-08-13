import React,{ FC } from 'react';
import "./weather-search-input.scss"
import {useAction, useTypedSelector} from "../../hooks";

const WeatherSearchInput : FC = () => {
    const {onSearchWeather} = useAction()
    const {cityReducer : {city},weatherReducer : {search}} = useTypedSelector(state => state)

    const onChangeCity = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') {
            onSearchWeather(city)
        }

        onSearchWeather(e.target.value)
    }

    return (
        <div className="weather__input_position">
            <input
                type="text"
                placeholder="&#xf002;
                Enter city name" className="weather__input"
                onChange={onChangeCity}
                value={search}
            />
        </div>
    );
};

export default WeatherSearchInput;