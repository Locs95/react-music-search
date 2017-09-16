import axios from 'axios'

// const API_KEY = '95a061835b50b1e14a0886d282077613'
// const BASE_URL = `http://api.musixmatch.com/ws/1.1/track.search?apikey=${API_KEY}`


//const API_KEY = 'ed8643665c40615a00558d29adc6d001';
//const BASE_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=${API_KEY}&format=json`;
const FREE_URL = `https://api-v2.hearthis.at/search/tracks/`

export const FETCH_TRACKS = 'FETCH_TRACKS'

export function fetchTracks(artist) {
    // const url = `${BASE_URL}&q_artist=${artist}`
     const url = `${FREE_URL}?t=${artist}`
 
     const response = axios(url)

     return {
     	type: FETCH_TRACKS,
     	payload: response
     }
}

