import axios from "axios";
import { config } from "./config.js";


export const getWeather = async (ctx) => {
    let locationLatitude = ctx.message.location.latitude;
    let locationLongitude = ctx.message.location.longitude;
    const respone = await axios.get(config.weatherUrl + `${locationLatitude}, ${locationLongitude}`);

    let text = `${respone.data.location.tz_id}\nTemperature: ${respone.data.current.temp_c} C\n${respone.data.current.condition.icon}`;
    return text;
}