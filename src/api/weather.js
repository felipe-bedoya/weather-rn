import axios from "axios";

const apiKey = 'a5a47c18197737e8eeca634cd6acb581';
export const getWeather = (lat, lon) => {
    return axios({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`
    })
}
