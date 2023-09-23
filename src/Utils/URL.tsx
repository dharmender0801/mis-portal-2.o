import axios from 'axios';

export const BASEUrl = "http://192.168.167.73:8083";

const getService = () => {
    return axios.get(`${BASEUrl}/service/get`)
        .then(response => {
            return response.data; // Return the response data
        })
        .catch(error => {
            console.error(error);
            throw error; // Rethrow the error to handle it elsewhere if needed
        });
}
const getCountry = (id: number) => {
    return axios.get(`${BASEUrl}/country/service?serviceId=` + id)
        .then(response => {
            return response.data; // Return the response data
        })
        .catch(error => {
            console.error(error);
            throw error; // Rethrow the error to handle it elsewhere if needed
        });
}
const DataService = {
    getService,
    getCountry,
}
export default DataService;