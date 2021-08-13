import React from 'react';
import BlockApp,{ BlockMarkup } from "../block-app";
import WeatherSearchInput from "../weather-search-input";
import WeatherCurrentDay from "../weather-current-day";
import { useTypedSelector } from "../../hooks";
import WeatherForecastList from "../weather-forecast-list";
import Loading from "../loading/";
import Error from "../error";

const Weather = () => {
    const {
        cityReducer : { loading : cityLoading,error : cityError },
        weatherReducer : { loading : weatherLoading , error}
    } = useTypedSelector(state => state)

    if(cityLoading || cityError) {
        return <Error errorText="Please turn on your geolocation"/>
    }

    const loading = weatherLoading ? <Loading/> : null
    const err = error ? <Error errorText="Page not found, please try again"/> : null
    const element = !(loading || err) ? <Block/> : null

    return (
        <BlockMarkup>
            <BlockApp>
                <div style={{padding : "5px 10px 5px 10px"}}>
                    <WeatherSearchInput/>
                    {loading}
                    {err}
                    {element}
                </div>
            </BlockApp>
        </BlockMarkup>
    );
};

const Block = () => {
    return (
        <>
            <WeatherCurrentDay/>
            <WeatherForecastList/>
        </>
    )
}

export default Weather;