import React, {useState, useEffect, useContext} from 'react';
import {useTypedSelector} from "../../hooks";
import './weather-current-day.scss'
import DayOfWeek,{imageUrl} from "../context";

const WeatherCurrentDay : React.FC = () => {
    const {
        weatherToday : { weather, name , main : { temp,humidity }, wind : { speed }
     }
    } = useTypedSelector(state => state.weatherReducer)

    const { namesOfWeek } = useContext(DayOfWeek)
    const {style} = useContext(imageUrl)

    const [time,onUpdateTime] = useState(new Date().toLocaleTimeString().slice(0,5))
    const [dayOfWeekNumber,onUpdateDayOfWeek] = useState(new Date().getDay())

    useEffect(() => {
       const index =  setInterval(() => {
               onUpdateTime(new Date().toLocaleTimeString().slice(0,5))

               if(time === '00:00') {
                   onUpdateDayOfWeek(new Date().getDay())
               }
            }
       , 1000)

        return () => clearInterval(index)
    },[ time ] )

    return (
        <div className="weather__current_block">
            <div className="weather__city_information">
                <h1 className="weather__city_name">{name}</h1>
                <span className="weather__city_time">
                    {namesOfWeek[dayOfWeekNumber]}, {time} , {weather[0].main}
                </span>
            </div>
            <div className="temp__information">
                <h1>
                    {Math.floor(temp)}
                    &#176;C
                </h1>
                <i className={style(weather[0].id)}></i>
            </div>
            <span className="weather__city_wind">
               <i className="fas fa-wind"></i> {speed} km/h Winds  <i className="fas fa-tint"></i> {humidity}% Humidity
            </span>
        </div>
    );
};

export default WeatherCurrentDay;