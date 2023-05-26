import axios from 'axios';

const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com/"
const API_KEY = "0bad04c920mshe1e5ae991190eb6p119effjsnde8dae1141bb"
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class Deezer{
    static searchTrack(track){
        return axios(withBaseUrl(`search?q=${track}&index=25`));
    }
}
