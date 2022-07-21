import axios from "axios";

export const baseUrl = "https://restcountries.com/v2"

export const fetchApi = async (url) => {

    const { data } = await axios.get(url)

    return data
}