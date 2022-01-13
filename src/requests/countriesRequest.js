import axios from "axios"

export const getCountries = async() => {
    return axios.get("https://7e019c9f-4274-4b14-bffe-240df25a2cc4.mock.pstmn.io/countries").then(resp => resp);
}

export const getFlights = async() => {
    return axios.get("https://7e019c9f-4274-4b14-bffe-240df25a2cc4.mock.pstmn.io/flights").then(resp => resp);
}