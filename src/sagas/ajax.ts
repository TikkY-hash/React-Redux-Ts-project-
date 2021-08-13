import {ICurrentWeather, IGetIp, IGetWeatherForecast} from "../types/types-weather";

const startRequest : string = 'https://'

const getData = async (http : string) : Promise<IGetWeatherForecast | ICurrentWeather | IGetIp>  => {
    const request = await fetch(`${startRequest}${http}`)

    if(!request.ok) {
        throw new Error(`something going wrong,status ${request.status}`)
    }

    return await request.json()
}

export default getData