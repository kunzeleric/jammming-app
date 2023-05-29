import axios from 'axios';

export class Deezer {

    static async searchTrack(query) {
        const options = {
            method: 'GET',
            url: `https://deezerdevs-deezer.p.rapidapi.com/search?`,
            params: { q: query },
            headers: {
                'X-RapidAPI-Key': '0bad04c920mshe1e5ae991190eb6p119effjsnde8dae1141bb',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
