import axios from "axios";


export const getCities = (query) => {
    return axios({method: 'GET', url: `https://search.reservamos.mx/api/v2/places?q=${query}`});
}
