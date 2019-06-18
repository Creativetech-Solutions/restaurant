import axios from 'axios';


const API_URL = "http://localhost:4000/";


export function get(url, params) {
	const config = {params:params} 
	return axios.get(API_URL+url, config); 
}
