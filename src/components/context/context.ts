import { createContext } from "react";
import { ICreateContext, IImageUrl } from "../../types/context-type";

const DayOfWeek = createContext<ICreateContext>( {
    namesOfWeek : [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
})

export const imageUrl = createContext<IImageUrl>({
    style : (icon : number) => `wi wi-owm-${icon}`
})

export default DayOfWeek